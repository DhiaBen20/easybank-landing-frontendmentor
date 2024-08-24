import { features } from "../data";
import { Container } from "./Container";

function Feature({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="space-y-6">
      <img src={icon} alt="" className="mx-auto md:mx-0" />
      <h3 className="text-center text-xl text-primary-blue md:text-left">
        {title}
      </h3>
      <p className="text-center text-gray-500 md:text-left">{description}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section className="bg-[#F4F5F7] py-16 md:py-20">
      <Container>
        <div className="md:max-w-[55%]">
            <h2 className="text-center text-4xl text-primary-blue md:text-left">
              Why choose Easybank?
            </h2>
            <p className="mt-4 text-center text-gray-500 md:text-left">
              We leverage Open Banking to turn your bank account into your financial
              hub. Control your finances like never before.
            </p>
        </div>

        <div className="mt-16 grid gap-5 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Feature
              key={f.id}
              title={f.title}
              description={f.description}
              icon={f.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
