import Link from "next/link";
import Image from "next/image";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import styles from "./SiteFooter.module.css";

const LINKS = [
  { label: "Product", href: "/#product" },
  { label: "Use cases", href: "/#use-cases" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Blog", href: "/blog" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export default function SiteFooter() {
  return <footer className={styles.footer}><div className={styles.inner}>
    <div className={styles.brand}>
      <Link href="/" className={styles.logo} aria-label="Yoinky home">
        <Image src="/Favicon.png" alt="Yoinky" width={42} height={42} />
      </Link>
      <p>Yoinky turns everything a company knows into content and distribution.</p>
      <div className={styles.socials} aria-label="Social links">
        <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="Yoinky on X"><FiTwitter /></a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="Yoinky on LinkedIn"><FiLinkedin /></a>
      </div>
      <small>© 2026 Yoinky. All rights reserved.</small>
    </div>
    <nav className={styles.navigation} aria-label="Footer navigation">{LINKS.map((link) => <Link key={link.label} href={link.href}>{link.label}</Link>)}</nav>
  </div></footer>;
}
