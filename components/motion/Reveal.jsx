import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

const groupVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const viewport = { once: true, margin: "-10% 0px" };

export function Reveal({ children, className, delay = 0, as = "div" }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: itemVariants.hidden,
        visible: {
          ...itemVariants.visible,
          transition: { ...itemVariants.visible.transition, delay },
        },
      }}
    >
      {children}
    </Tag>
  );
}

export function RevealGroup({ children, className, as = "div" }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={groupVariants}
    >
      {children}
    </Tag>
  );
}

export function RevealItem({ children, className, as = "div" }) {
  const Tag = motion[as];
  return (
    <Tag className={className} variants={itemVariants}>
      {children}
    </Tag>
  );
}
