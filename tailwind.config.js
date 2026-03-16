import { Container } from "lucide-react";

/** @type {import ('tailwindcss').config} */
export default {
    content: [],
    theme: {
        extend:{
            colors:{
                primary: "#ff8901",
                secondary: "#fb923c",
            },
            Container:{
                center: true,
                padding: {
                    sm: "2rem",
                    lg: "4rem",
                    xl: "5rem",
                    "2xl": "6rem",
                }
            }
        },

    },
    Plugins: [],

}  
 