import Link from "next/link";
import styles from "./abstract.module.css";
import VisuallyHidden from "@/components/VisuallyHidden";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abstract",
  description: "projects from the frontend practice website",
};


export default function Abstract() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href={"/abstract"}>
            <VisuallyHidden>Home</VisuallyHidden>
            Abstract
          </Link>
        </nav>
      </header>
      <section className={styles.wrapper}>
        <h2>How can we help you?</h2>
        <input className={styles.input} type="text" placeholder="Search" />
      </section>
      <main className={styles.main}>
        <div>
          <h2>Branches</h2>
          <p>
            Abstract lets you manage, version, and document your designs in one
            place.
          </p>
        </div>
        <div>
          <h2>Manage your account</h2>
          <p>
            Configure your account settings, such as your email, profile
            details, and password.
          </p>
        </div>
        <div>
          <h2>Manage organizations, teams, and projects</h2>
          <p>
            Use Abstract organizations, teams, and projects to organize your
            people and your work.
          </p>
        </div>
        <div>
          <h2>Manage billing</h2>
          <p>Change subscriptions and payment details.</p>
        </div>
      </main>
      <footer className={styles.footer}>
        <aside>
          <h2>Abstract</h2>
          <p>Branches</p>
        </aside>
        <aside>
          <h2>Resources</h2>
          <div>
            <Link href={"/abstract"}>Blog</Link>
          </div>
          <div>
            <Link href={"/abstract"}>Help Center</Link>
          </div>
          <div>
            <Link href={"/abstract"}>Release Notes</Link>
          </div>
          <Link href={"/abstract"}>Status</Link>
        </aside>
        <aside>
          <h2>Community</h2>
          <div>
            <Link href={"/abstract"}>Twitter</Link>
          </div>
          <div>
            <Link href={"/abstract"}>Linkedin</Link>
          </div>
          <div>
            <Link href={"/abstract"}>Facebook</Link>
          </div>
          <div>
            <Link href={"/abstract"}>Dribble</Link>
          </div>
        </aside>
        <aside>
          <h2>Company</h2>
          <div>
            <Link href={"/abstract"}>About Us</Link>
          </div>
          <div>
            <Link href={"/abstract"}>Careers</Link>
          </div>
          <div>
            <Link href={"/abstract"}>Legal</Link>
          </div>
        </aside>
      </footer>
    </>
  );
}
