import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black p-3 flex justify-around text-white/80 items-center">
      <address className="flex gap-5 text-sm ">
        <p>
          Email: <Link href="mailto:Ari Go@test.com">Ari Go@test.com</Link>
        </p>
        <p>
          Phone: <Link href="tel:01012344564">01012344564</Link>
        </p>
        <p>
          <Link
            target="_blank"
            href="https://www.google.com/maps/place/%EB%AF%B8%EA%B5%AD+%EB%89%B4%EC%9A%95/@40.69754,-74.3093235,10z/data=!3m1!4b1!4m6!3m5!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728!16zL20vMDJfMjg2?entry=ttu"
          >
            New York City, NY, United State
          </Link>
        </p>
      </address>
      <p>
        <small>© copyright 2024 Blog Starter.</small>
      </p>
    </footer>
  );
};

export default Footer;
