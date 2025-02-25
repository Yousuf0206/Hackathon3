"use client";

import { BASE_URL } from "@/src/lib/api/baseUrl";
//import { loadStripe } from "@stripe/stripe-js";

//const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

interface CheckoutButtonProps {
    products: { name: string; price: number; quantity: number }[];
    totalPrice: number;
}

export default function CheckoutButton({ products, totalPrice }: CheckoutButtonProps) {
    const handleCheckout = async () => {
        try {
            const response = await fetch(`${BASE_URL}/api/v4/checkout`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
                },
                body: JSON.stringify({ products, totalPrice }),
            });

            if (!response.ok) {
                const errorDetails = await response.json();
                throw new Error(errorDetails.error || "Failed to create checkout session");
                }
    
                //const { id } = await response.json();
               // const stripe = await stripePromise;
                //if (!stripe) throw new Error("Stripe.js failed to load");
    
                // Redirect to Stripe checkout
                //const result = await stripe.redirectToCheckout({ sessionId: id });
    
                //if (result.error) {
                  //  throw new Error(result.error.message);
              //  }
    
                // Order will now be created via webhook after successful payment.
            } catch (error) {
                console.error("Checkout error:", error);
                alert("Something went wrong during checkout. Please try again.");
            }

            //const { id } = await response.json();
           // const stripe = await stripePromise;
            //if (!stripe) throw new Error("Stripe.js failed to load");

            // Redirect to Stripe checkout
            //const result = await stripe.redirectToCheckout({ sessionId: id });

            //if (result.error) {
              //  throw new Error(result.error.message);
          //  }

            // Order will now be created via webhook after successful payment.
       // } catch (error) {
         //   console.error("Checkout error:", error);
           // alert("Something went wrong during checkout. Please try again.");
        //}
    }

    return (
        <button
            onClick={handleCheckout}
            className="w-[35%] bg-gradient-to-r from-myOrange to-myOrange text-white py-3 px-6 text-center text-sm font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
        >
            Pay Now
        </button>
    );
}