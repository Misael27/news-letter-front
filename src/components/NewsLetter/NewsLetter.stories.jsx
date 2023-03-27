import React from 'react'
import NewsLetter from './NewsLetter'

export default {
    title: "NewsLetter",
    component: NewsLetter
}

export const NewsLetterExample = () => {

    const newsLetterData = {
        id: 1,
        title: 'Ejemplo titulo newsLetter',
        htmlBody: "<!DOCTYPE html> <html lang=\"es\"> <head> <meta charset=\"utf-8\"> <title>HTML</title> <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> <link rel=\"stylesheet\" href=\"estilo.css\"> </head> <body> <p>Esta página web es una página HTML válida.</p> </body> </html>",
        createdAt: '2023-03-24'
    }

    return (
        <>
            <NewsLetter {...newsLetterData}/>
        </>
        );
    }