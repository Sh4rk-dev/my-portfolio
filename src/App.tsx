import { z } from "zod";
import { useState } from "react";

import { motion } from "framer-motion";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ChevronRight, ChevronsDown, Menu, X } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel/carousel";

import { Form } from "@/components/form";
import { Header } from "@/components/header";
import { feedbacks } from "@/moked/FEEDBACKS";
import { RecentWork } from "@/components/work";
import { Button } from "@/components/ui/button";
import { Studies } from "@/components/studiesComponents";
import { CarouselItemContent } from "@/components/ui/carousel/carouselItem";

interface IFormProps {
  name: string;
  subject: string;
  message: string;
}

const formSchema = z.object({
  name: z.string().trim().min(1, "Campo obrigatório").max(32),
  subject: z.string().trim().min(1, "Campo obrigatório"),
  message: z.string().trim().min(1, "Campo obrigatório"),
});

export type FormValidation = z.infer<typeof formSchema>;

export function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  console.log(isOpen);

  const { register, handleSubmit } = useForm<FormValidation>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      subject: "",
      message: "",
    },
  });

  const feedback = feedbacks;

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };
  function handleSubmitQuestion(data: IFormProps) {
    console.log(data);
  }

  return (
    <main className="bg-zinc-950 flex flex-col">
      <div className=" lg:hidden">
        <motion.nav
          className="mt-14 z-50 fixed w-full"
          animate={isOpen ? "open" : "closed"}
          variants={variants}
        >
          <Header setIsOpen={setIsOpen} />
        </motion.nav>
        <div className="flex w-full h-16 z-50 justify-start items-center fixed bg-color_primary">
          <Button onClick={() => setIsOpen((isOpen) => !isOpen)}>
            {!isOpen ? (
              <Menu color="#fff" size={32} />
            ) : (
              <X color="#fff" size={32} />
            )}
          </Button>
          <h1 className="font-raleway text-white text-lg">Menu</h1>
        </div>
      </div>

      <div className="hidden lg:flex lg:px-40 lg:w-full lg:justify-center">
        <Header />
      </div>

      <section
        id="01"
        className="px-10 pt-16 lg:px-20 lg:pt-0 h-screen lg:h-fit"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
        >
          <div className="flex flex-col mt-10 lg:pb-32 lg:flex-row md:justify-center md:items-center lg:gap-40">
            <div className="order-2 md:max-w-[24rem] lg:order-1 lg:mt-32">
              <h1 className=" text-4xl lg:text-5xl mt-10 mb-2 font-raleway font-extrabold text-white">
                Renan Rapace
              </h1>

              <span className="text-color_secondary font-mono">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, nesciunt quod rerum unde soluta asperiores dolorum
                nostrum.
              </span>

              <Button className="mt-8 h-12 w-full gap-2 bg-color_third border font-mono text-white text-base font-extrabold  border-lime-700 shadow-2xl shadow-lime-700 lg:hover:shadow-lime-700 lg:hover:animate-pulse lg:duration-200">
                Let’s get started
                <ChevronRight size={20} />
              </Button>
            </div>

            <div className="md:rounded-full rounded-xl items-center justify-center overflow-hidden order-1 lg:order-2 md:mt-32 md:h-[25rem] ">
              <img
                className="md:w-full"
                src="/src/assets/avatar.jpg"
                alt="Avatar"
              />
            </div>
          </div>

          <div className="flex justify-center animate-bounce duration-800 mt-14 lg:mb-28">
            <ChevronsDown size={40} color="#fff" />
          </div>
        </motion.div>
      </section>

      <section
        id="02"
        className="px-10 flex flex-col bg-white pt-20 mt-32 lg:mt-0 items-center lg:px-80 md:bg-gray-300-500 "
      >
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
        >
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-raleway mb-5 text-4xl font-extrabold">
              Case Studies
            </h1>
            <span className="flex text-center text-sm leading-7 text-color_secondary font-plexMono lg:max-w-[35.62rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              ipsa, explicabo eum aut, fugit laudantium ipsam veritatis culpa
              veniam blanditiis adipisci consequuntur laborum qui corporis
              expedita! Similique rem laboriosam autem.
            </span>
          </div>

          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
            >
              <Studies className="mt-16 lg:flex lg:flex-row lg:gap-10 lg:justify-center lg:items-center md:flex-col">
                <Studies.Image
                  className="order-1 lg:order-2 lg:flex lg:max-w-[27.81rem] lg:h-[20.85rem]"
                  imgURL="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />

                <Studies className="lg:max-w-[28.12rem] lg:h-80">
                  <Studies.Tag tagName="Mobile" className="text-_orange" />
                  <Studies.Title title="NLW-Unite-Mobile" />
                  <Studies.Description description="Desenvolvimento de uma aplicação mobile em React Native, aplicação dos conceitos de Propriedades, Estados e Componentes, tipagem com Typescript, Expo Framework, interface com Native Wind, gerenciamento de estado global com Zustand, roteamento por arquivos com Expo Router, consumo de API Node.js, animações com Moti." />

                  <a href="https://github.com/Sh4rk-dev/NLW-Unite-Mobile">
                    <Button className="mt-5 w-full gap-2 font-raleway text-white font-extrabold bg-_orange md:transition md:ease-in-out md:hover:-translate-y-1 md:hover:scale-110 md:duration-500 ">
                      View case study
                      <ChevronRight size={18} />
                    </Button>
                  </a>
                </Studies>
              </Studies>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
            >
              <Studies className="mt-16 lg:flex lg:flex-row lg:gap-10 lg:justify-center lg:items-center">
                <Studies.Image
                  className="order-1 lg:-order-1 lg:flex lg:max-w-[27.81rem] lg:h-[20.85rem]"
                  imgURL="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />

                <Studies className="lg:max-w-[28.12rem] ">
                  <Studies.Tag
                    tagName="Website"
                    className="bg-blue-100 text-blue-600"
                  />
                  <Studies.Title title="NLW-Unite-React" />
                  <Studies.Description description="Desenvolvimento de uma aplicação front-end em ReactJS, aplicação dos conceitos de Propriedades, Estados e Componentes, tipagem com Typescript, tooling com Vite, interface responsiva com TailwindCSS, consumo de API Node.js, uso de URL states." />

                  <a href="https://github.com/Sh4rk-dev/NLW-Unite-React">
                    <Button className="mt-[73px] w-full gap-2 font-raleway text-white font-extrabold bg-blue-600 md:transition md:ease-in-out md:hover:-translate-y-1 md:hover:scale-110 md:duration-500">
                      View case study
                      <ChevronRight size={18} />
                    </Button>
                  </a>
                </Studies>
              </Studies>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
            >
              <Studies className="mt-16 lg:flex lg:flex-row lg:gap-10 lg:justify-center lg:items-center mb-20 lg:h-[20.75rem]">
                <Studies.Image
                  className="order-1 lg:order-2 lg:flex lg:max-w-[27.81rem] lg:h-[20.85rem]"
                  imgURL="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />

                <Studies className="lg:max-w-[28.12rem]">
                  <Studies.Tag
                    tagName="Backend"
                    className="text-emerald-500 bg-emerald-100"
                  />
                  <Studies.Title title="NLW-Unite-NodeJS" />
                  <Studies.Description description="Desenvolvimento de uma aplicação back-end em Node.js, aplicação dos conceitos de API REST, utilizando TypeScript, Fastify como framework, integração do Prisma ORM + SQLite e Zod para validação de dados." />

                  <a href="https://github.com/Sh4rk-dev/NLW-Unite-NodeJS">
                    <Button className="mt-24 w-full gap-2 font-raleway text-white font-extrabold bg-emerald-500 md:transition md:ease-in-out md:hover:-translate-y-1 md:hover:scale-110 md:duration-500">
                      View case study
                      <ChevronRight size={18} />
                    </Button>
                  </a>
                </Studies>
              </Studies>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section
        id="03"
        className="px-10 flex flex-col pt-20 bg-zinc-950 h-screen lg:px-80 lg:items-center "
      >
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
        >
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-raleway text-white mb-3 text-4xl font-extrabold">
              Testimonials
            </h1>
            <span className="flex lg:max-w-[35.62rem] text-center text-sm leading-7 text-color_secondary font-plexMono">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              ipsa, explicabo eum aut, fugit laudantium ipsam veritatis culpa
              veniam blanditiis.
            </span>
          </div>

          <div className="lg:max-w-[56rem] lg:px-6 flex flex-col mt-6 justify-center items-center border-white/20">
            <Carousel className="w-full sm:w-[270px] md:w-[565px] lg:w-full mt-10 md:mt-32">
              <CarouselContent>
                {feedback.map((feedback, id) => (
                  <CarouselItem className="basis-auto" key={id}>
                    <CarouselItemContent
                      avatar
                      imgURL={feedback.imgURL}
                      title={feedback.name}
                      profession={feedback.profession}
                      description={feedback.feedback}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="z-10 bg-white hidden md:flex sm:flex" />
              <CarouselNext className="z-10 hidden md:flex sm:flex" />
            </Carousel>
          </div>
        </motion.div>
      </section>

      <section
        id="04"
        className="px-10 flex flex-col bg-white items-center lg:px-80  md:items-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
        >
          <div className="flex flex-col justify-center items-center">
            <h1 className="px-8 font-raleway mt-20 mb-5 text-4xl font-extrabold">
              Recent Work
            </h1>

            <span className="flex mb-[60px] max-w-[35.62rem] text-center text-sm leading-7 text-color_secondary font-plexMono">
              Solving user & business problems since last 15+ years.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </span>
          </div>

          <div className="flex flex-col 1xl:flex-row gap-16 mb-20 md:items-center lg:flex lg:flex-col">
            <RecentWork
              url="https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="Work name here"
              description="Rempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt u"
            />
            <RecentWork
              url="https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="Work name here"
              description="Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna."
            />
          </div>
        </motion.div>
      </section>

      <section id="05" className="px-10 pt-20 bg-zinc-950 h-screen">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
        >
          <div className="px-10 flex flex-col justify-center items-center">
            <h1 className="font-raleway text-white mb-5 text-4xl font-extrabold">
              Get In Touch
            </h1>
            <span className="lg:w-[35.62rem] flex mb-[60px] text-center text-sm leading-7 text-color_secondary font-plexMono">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </div>

          <div className="flex justify-center items-start mb-20">
            <Form onSubmit={handleSubmit(handleSubmitQuestion)} className="">
              <Form.Label title="Name" />
              <Form.Input
                type="text"
                placeholder="Please enter your name"
                {...register("name")}
              />

              <Form.Label title="Subject" />
              <Form.Input
                type="text"
                placeholder="Please enter subject"
                {...register("subject")}
              />

              <Form.Label title="Message" />
              <Form.Textarea
                placeholder="Enter your message"
                {...register("message")}
              />

              <Button
                type="submit"
                className="mt-4 h-12 w-full gap-2 font-raleway text-white font-extrabold bg-color_third border border-lime-700 shadow-2xl shadow-lime-700 hover:shadow-lime-700 hover:animate-pulse duration-200"
              >
                Submit
                <ChevronRight size={18} />
              </Button>
            </Form>
          </div>
        </motion.div>
      </section>

      <footer className="w-full h-14 mt-20 md:h-[70px] md:-mt-16 flex items-center justify-center bg-color_primary">
        <h1 className="text-white">Renan Rapace</h1>
      </footer>
    </main>
  );
}
