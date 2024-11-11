'use client'
import React from "react";
import "@/styles/scss/_app.scss";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "@/_context/AuthContext";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <title>Washton | Effortless dry cleaning, delivered to your door.</title> */}
        <meta name="description" content="Effortless dry cleaning, delivered to your door." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content="course" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ToastContainer />
        <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
