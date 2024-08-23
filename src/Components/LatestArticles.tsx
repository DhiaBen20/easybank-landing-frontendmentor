import { articles } from "../data";
import { Container } from "./Container";

function Article({
  title,
  author,
  descriptions,
  img,
}: {
  title: string;
  author: string;
  descriptions: string;
  img: string;
}) {
  return (
    <div className="overflow-hidden rounded-md">
      <div className="h-48 w-full">
        <img src={img} alt="" className="size-full object-cover" />
      </div>
      <div className="space-y-2 bg-white px-6 py-8">
        <div className="text-xs text-gray-500">
          By <a href="#">{author}</a>
        </div>

        <h2 className="leading-tight text-primary-blue transition-colors duration-100 hover:text-primary-green">
          <a href="#">{title}</a>
        </h2>
        <p className="line-clamp-4 text-sm text-gray-500">{descriptions}</p>
      </div>
    </div>
  );
}

export function LatestArticles() {
  return (
    <section className="bg-[#FAFAFA] py-20">
      <Container>
        <h2 className="text-4xl text-primary-blue">Latest Articles</h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {articles.map((a) => (
            <Article
              key={a.id}
              title={a.title}
              author={a.author}
              descriptions={a.description}
              img={a.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
