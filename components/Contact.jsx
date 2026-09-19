import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";
import TiltCard from "./motion/TiltCard";
import Magnetic from "./motion/Magnetic";

const FORM_ENDPOINT = "https://getform.io/f/4936f83c-80c3-4ff3-9d1a-7e13f51064f9";
const MESSAGE_MAX = 1000;
const emptyValues = { name: "", phone: "", email: "", subject: "", message: "" };

const validate = (v) => {
  const errors = {};
  if (v.name.trim().length < 2) errors.name = "Please tell me your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) errors.email = "Enter a valid email address.";
  if (v.phone.trim() && !/^[+\d][\d\s().-]{6,}$/.test(v.phone.trim())) errors.phone = "Enter a valid phone number.";
  if (v.message.trim().length < 10) errors.message = "A few more words would help (10+ characters).";
  return errors;
};

function Field({ label, name, type = "text", textarea = false, required, autoComplete, value, error, onChange, onBlur }) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;
  const Tag = textarea ? "textarea" : "input";
  const boxClass = error
    ? "border-danger"
    : focused
    ? "border-accent field-focus"
    : "border-line";

  return (
    <div>
      <motion.div
        animate={{ scale: focused ? 1.01 : 1, y: focused ? -2 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className={`relative rounded-lg border-2 bg-surface transition-colors duration-200 ${boxClass}`}
      >
        <Tag
          id={`contact-${name}`}
          name={name}
          type={textarea ? undefined : type}
          rows={textarea ? 7 : undefined}
          maxLength={textarea ? MESSAGE_MAX : undefined}
          autoComplete={autoComplete}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => {
            setFocused(false);
            onBlur(name);
          }}
          aria-invalid={!!error}
          aria-required={required || undefined}
          aria-describedby={error ? `contact-${name}-error` : undefined}
          className="w-full resize-none bg-transparent px-3 pb-2 pt-6 text-ink outline-none"
        />
        <label
          htmlFor={`contact-${name}`}
          className={`pointer-events-none absolute left-3 transition-all duration-200 ${
            active
              ? "top-1.5 text-[10px] uppercase tracking-widest text-accent"
              : "top-4 text-sm text-muted"
          }`}
        >
          {label}
          {required && <span aria-hidden> *</span>}
        </label>
        {textarea && (
          <span className={`absolute bottom-2 right-3 font-mono text-[10px] ${value.length >= MESSAGE_MAX ? "text-danger" : "text-muted"}`}>
            {value.length}/{MESSAGE_MAX}
          </span>
        )}
      </motion.div>
      <AnimatePresence>
        {error && (
          <motion.p
            id={`contact-${name}-error`}
            role="alert"
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            className="mt-1 text-xs text-danger"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

const Contact = () => {
  const [values, setValues] = useState(emptyValues);
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle");
  const formControls = useAnimation();
  const formRef = useRef(null);
  const errors = validate(values);
  const visibleError = (name) => (touched[name] ? errors[name] : undefined);

  useEffect(() => {
    if (status !== "success") return;
    const t = setTimeout(() => setStatus("idle"), 4000);
    return () => clearTimeout(t);
  }, [status]);

  const onChange = (name, value) => setValues((v) => ({ ...v, [name]: value }));
  const onBlur = (name) => setTouched((t) => ({ ...t, [name]: true }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(errors).length) {
      setTouched({ name: true, phone: true, email: true, subject: true, message: true });
      formControls.start({ x: [0, -8, 8, -6, 6, 0], transition: { duration: 0.4 } });
      const firstInvalid = Object.keys(emptyValues).find((k) => errors[k]);
      formRef.current.elements[firstInvalid]?.focus();
      return;
    }
    setStatus("sending");
    try {
      const data = new FormData();
      Object.entries(values).forEach(([k, v]) => data.append(k, v));
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Form submission failed: ${res.status}`);
      setValues(emptyValues);
      setTouched({});
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  };

  const socials = [
    { href: "https://www.linkedin.com/in/mohammadimran1802/", label: "LinkedIn", icon: <FaLinkedinIn />, external: true },
    { href: "https://github.com/beingimran", label: "GitHub", icon: <FaGithub />, external: true },
    { href: "mailto:imranben35@gmail.com", label: "Email Mohammad Imran", icon: <AiOutlineMail /> },
  ];

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <Reveal as="p" className="text-xl tracking-widest uppercase text-accent">
          Contact
        </Reveal>
        <Reveal as="h2" delay={0.1} className="py-4">Get In Touch</Reveal>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <Reveal delay={0.15} className="col-span-3 lg:col-span-2 w-full h-full">
          <TiltCard max={6} lift={16} className="h-full rounded-xl">
          <div className="w-full h-full shadow-xl shadow-line rounded-xl p-4 bg-surface">
            <div className="lg:p-1 h-full ">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src='/assets/contact.jpg'
                  alt="Hands typing on a laptop keyboard"
                  width={400} height={400}
                />
              </div>
              <div>
                <h2 className="py-2">MOHAMMAD IMRAN</h2>
                <p>Software Engineer & Full-Stack Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  {socials.map(({ href, label, icon, external }) => (
                    <Magnetic key={href} strength={0.3}>
                      <a
                        href={href}
                        aria-label={label}
                        target={external ? "_blank" : undefined}
                        rel="noreferrer"
                      >
                        <div className="rounded-full shadow-lg shadow-line p-6 cursor-pointer transition-colors duration-300 hover:bg-accent hover:text-accent-ink">
                          {icon}
                        </div>
                      </a>
                    </Magnetic>
                  ))}
                  <Magnetic strength={0.3}>
                    <Link href="/resume" aria-label="View resume" className="block rounded-full shadow-lg shadow-line p-6 transition-colors duration-300 hover:bg-accent hover:text-accent-ink">
                      <BsFillPersonLinesFill />
                    </Link>
                  </Magnetic>
                </div>
              </div>
            </div>
          </div>
          </TiltCard>
          </Reveal>

          {/* right */}
          <Reveal delay={0.25} className="col-span-3 w-full h-auto shadow-xl shadow-line rounded-xl lg:p-4 bg-surface">
            <div className="p-4">
              <motion.form
                ref={formRef}
                animate={formControls}
                action={FORM_ENDPOINT}
                method="POST"
                encType="multipart/form-data"
                noValidate
                onSubmit={handleSubmit}
              >
                <RevealGroup className="flex flex-col gap-4">
                  <RevealItem className="grid md:grid-cols-2 gap-4">
                    <Field label="Name" name="name" required autoComplete="name" value={values.name} error={visibleError("name")} onChange={onChange} onBlur={onBlur} />
                    <Field label="Phone number" name="phone" type="tel" autoComplete="tel" value={values.phone} error={visibleError("phone")} onChange={onChange} onBlur={onBlur} />
                  </RevealItem>
                  <RevealItem>
                    <Field label="Email" name="email" type="email" required autoComplete="email" value={values.email} error={visibleError("email")} onChange={onChange} onBlur={onBlur} />
                  </RevealItem>
                  <RevealItem>
                    <Field label="Subject" name="subject" value={values.subject} error={visibleError("subject")} onChange={onChange} onBlur={onBlur} />
                  </RevealItem>
                  <RevealItem>
                    <Field label="Message" name="message" textarea required value={values.message} error={visibleError("message")} onChange={onChange} onBlur={onBlur} />
                  </RevealItem>
                  <RevealItem>
                    <Magnetic strength={0.15} className="w-full">
                      <motion.button
                        type="submit"
                        disabled={status === "sending"}
                        whileTap={{ scale: 0.98 }}
                        className="relative flex w-full items-center justify-center gap-3 overflow-hidden p-4 mt-2 transition-shadow hover:shadow-[0_12px_40px_-12px_var(--c-accent)] disabled:cursor-wait"
                      >
                        <AnimatePresence mode="wait" initial={false}>
                          {status === "sending" ? (
                            <motion.span key="sending" className="flex items-center gap-3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                              <span aria-hidden className="h-4 w-4 animate-spin rounded-full border-2 border-accent-ink border-t-transparent" />
                              Sending
                            </motion.span>
                          ) : status === "success" ? (
                            <motion.span key="sent" className="flex items-center gap-2" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, y: -10 }}>
                              <motion.svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                <motion.path d="M4 12.5l5 5L20 7" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, ease: "easeOut" }} />
                              </motion.svg>
                              Sent
                            </motion.span>
                          ) : (
                            <motion.span key="idle" className="flex items-center gap-2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                              Send Message <span aria-hidden>→</span>
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </motion.button>
                    </Magnetic>
                  </RevealItem>
                </RevealGroup>
                <AnimatePresence>
                  {status === "success" && (
                    <motion.p
                      key="ok"
                      role="status"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="pt-4 text-center text-accent"
                    >
                      Thanks! Your message has been sent. I&apos;ll get back to you soon.
                    </motion.p>
                  )}
                  {status === "error" && (
                    <motion.p
                      key="err"
                      role="alert"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="pt-4 text-center text-danger"
                    >
                      Something went wrong. Please try again or email me at{" "}
                      <a className="underline" href="mailto:imranben35@gmail.com">
                        imranben35@gmail.com
                      </a>
                      .
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.form>
            </div>
          </Reveal>
        </div>
        <div className="flex justify-center py-12">
          <Magnetic>
            <Link href="/#home" aria-label="Back to top" className="block rounded-full shadow-lg shadow-line p-4 hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp
                className="text-accent"
                size={30}
                aria-hidden
              />
            </Link>
          </Magnetic>
        </div>
      </div>
    </div>
  );
};

export default Contact;
