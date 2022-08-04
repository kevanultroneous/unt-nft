import styles from "@/styles/components/home/Exchange.module.css";
import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";
const Exchange = ({ color, href }) => {
  return (
    <div className={styles.ExchnageContainer}>
      <Link href={href}>
        <a
          href={href}
          className={styles.ExchnageHead}
          style={
            color
              ? {
                WebkitTextStroke: `1px ${color}`,
                //           backgroundImage: `-webkit-gradient(
                //   linear,
                //   left bottom,
                //   left top,
                //   color-stop(50%, ${color}),
                //   color-stop(50%, ${color})
                // )`,
                //           backgroundImage: `-webkit-linear-gradient(bottom, ${color} 50%, #fff 50%)`,
                //           backgroundImage: `-o-linear-gradient(bottom, ${color} 50%, #fff 50%)`,
                //           backgroundImage: `linear-gradient(to top, ${color} 50%, #fff 50%)`,
              }
              : null
          }
        >
          Trade{" "}
          <HiOutlineExternalLink
            className={styles.ContactusIcon}
            style={color ? { color: color } : null}
          />
        </a>
      </Link>
      <p
        className={styles.ExchnageParagraph}
        style={color ? { color: color } : null}
      >
        Get a free demo to dive in the crypto world with a smart exchange
        platform.
      </p>
    </div>
  );
};
export default Exchange;
