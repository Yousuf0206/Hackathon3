import { createClient } from '@sanity/client';
import { Buffer } from 'buffer'; // Correct import for Buffer
import fetch from 'node-fetch';

const client = createClient({
  projectId: '2yfessga',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-01-13',
  token: 'skk3AeHabXg5oGREIhUpbgXo3Z3QHlJeIeXybtGwEJvdAnIaE4Q58ybWVlO1idQy9a502aZmfrgiBL9wM8HW1v6LYXkOGQ0IhSsmrcHJEF8bq4fb4Ytrqw80vln2r4Eqx0HlYLxaK6YPTRDdBSKGNJmWHwlNGkV4SpIvtRBfmhV4y60f4oiA',
});

async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl}`);
    }

    const buffer = await response.arrayBuffer();
    if (buffer.byteLength === 0) {
      throw new Error(`Failed to read image buffer: ${imageUrl}`);
    }
    const bufferImage = Buffer.from(buffer); // Correct usage of Buffer.from
    console.log('Buffer is created:', Buffer.isBuffer(bufferImage));
    
    const asset = await client.assets.upload('image', bufferImage, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

async function uploadProduct(product) {
  try {
    const imageId = await uploadImageToSanity(product.imageUrl);

    if (imageId) {
      const document = {
        _type: 'product',
        title: product.title,
        price: product.price,
        productImage: {
          _type: 'image',
          asset: {
            _ref: imageId,
          },
        },
        tags: product.tags,
        discountPercentage: product.discountPercentage, // Corrected typo
        description: product.description,
        isNew: product.isNew,
      };

      const createdProduct = await client.create(document);
      console.log(`Product ${product.title} uploaded successfully:`, createdProduct);
    } else {
      console.log(`Product ${product.title} skipped due to image upload failure.`);
    }
  } catch (error) {
    console.error('Error uploading product:', error);
  }
}

async function importProducts() {
  try {
    const response = await fetch('https://template6-six.vercel.app/api/products');
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const products = await response.json();

    for (const product of products) {
      await uploadProduct(product);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

importProducts();