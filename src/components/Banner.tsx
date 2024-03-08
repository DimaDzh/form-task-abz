import styles from "./styles.module.css";

export default function Banner() {
  return (
    <section
      className={`${styles.bannerBg} w-full md:h-[500px] lg:h-[650px] flex mb-[140px] justify-center items-center relative`}
    >
      <div className="flex flex-col items-center mx-auto max-w-[380px] md:max-w-md lg:max-w-lg text-white text-center container z-10 py-10">
        <h1 className="h1 mb-5">Test assignment for front-end developer</h1>
        <p className="p1 mb-8">
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <button className="btn-primary">Sign up</button>
      </div>
      <div className="bg-black opacity-50 absolute top-0 left-0 w-full h-full"></div>
    </section>
  );
}
