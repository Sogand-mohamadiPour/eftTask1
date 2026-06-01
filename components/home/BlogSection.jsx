import Link from "next/link";
import Image from "next/image";

export default function BlogSection() {
  const articles = [
    {
      image: "/pic/03.webp",
      category: "خواب",
      title: "چطور چرت بزنیم که واقعاً سرحال شویم؟",
      description: "راهنمای کوتاه برای استراحت‌های مؤثر در وسط روز.",
    },
    {
      image: "/pic/04.webp",
      category: "آرامش",
      title: "چطور اضطراب را آرام کنیم وقتی ذهن شلوغ است؟",
      description: "۱۰ نکته عملی برای لحظه‌های پراسترس.",
    },
  ];

  return (
    <section
      id="music"
      className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-calm-deep sm:text-4xl">
          وبلاگ ما را برای منابع بیشتر بخوانید.
        </h2>
        <p className="mx-auto mt-4 mb-12 max-w-2xl text-center text-lg text-slate-600">
          مدیتیشن، خواب، استرس و سلامت روان.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {articles.map((article) => (
            <article
              key={article.title}
              className="overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200/80"
            >
              <Image
                src={article.image}
                alt={article.category}
                width={600}
                height={300}
                className="h-40 w-full object-cover sm:h-48"
              />

              <div className="p-6">
                <span className="text-xs font-semibold text-calm-teal">
                  {article.category}
                </span>

                <h3 className="mt-2 text-xl font-bold text-calm-deep">
                  <Link href="#">{article.title}</Link>
                </h3>

                <p className="mt-3 text-slate-600">{article.description}</p>

                <Link
                  href="#"
                  className="mt-4 inline-block text-sm font-semibold text-calm-teal"
                >
                  مطالعه بیشتر
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
