import React from "react";
import Article from "@/modules/blog/components/article.componets";
import Layout from "@/modules/layouts/layout";

export default function Entrenamientos() {
  const articles = [
    {
      imageUrl:
        "https://res.cloudinary.com/dpnfdcar1/image/upload/v1747674281/Sin_titulo_2c2f4159-a9d0-4489-9289-65b75c112a99_niycie.jpg",
      category: "Entrenamiento - Pesas",
      title: "Cómo mejorar tu fuerza con rutinas de pesas",
      description: "Descubre los mejores ejercicios para ganar masa muscular.",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dpnfdcar1/image/upload/v1747692996/450_1000_kphl2s.webp",
      category: "Entrenamiento - Cardio",
      title: "Cardio para perder grasa",
      description: "Rutinas de cardio para quemar calorías de forma efectiva.",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dpnfdcar1/image/upload/v1747693163/que-es-el-entrenamiento-hiit_flc41y.jpg",
      category: "Entrenamiento - Resistencia",
      title: "Entrena más en mayor tiempo",
      description: "Aprovecha el entrenamiento por intervalos para maximizar resultados.",
    },
  ];

  return (
    <Layout>
      <h3 className="text-cyan-300 font-extralights text-6xl text-center">
        Entrenamientos
      </h3>
      <p className="text-center text-white mb-8 text-4xl">
        Aquí podrás registrar y consultar tus rutinas de entrenamiento.
      </p>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-black">
        {articles.map((article, index) => (
          <Article
            key={index}
            imageUrl={article.imageUrl}
            category={article.category}
            title={article.title}
            description={article.description}
          />
        ))}
      </section>
    </Layout>
  );
}