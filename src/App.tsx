import { z } from "zod";
import { useState } from "react";

import { motion } from "framer-motion";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import fotoAvatar from "./assets/avatar.jpg";
import portfolioweb from "./assets/myportfolioweb.png"; 
import ScreenApp from "./assets/screenapp.png";

import {
  ChevronRight,
  ChevronsDown,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";

import {
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselContent,
  CarouselPrevious,
} from "@/components/ui/carousel/carousel";

import { Form } from "@/components/form";
import { Header } from "@/components/header";
import { feedbacks } from "@/moked/FEEDBACKS";
import { RecentWork } from "@/components/work";
import { Button } from "@/components/ui/button";
import { Studies } from "@/components/studiesComponents";
import { CarouselItemContent } from "@/components/ui/carousel/carouselItem";
import { contentTheStudies } from "./moked/ESTUDOS";

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

  const { register, handleSubmit } = useForm<FormValidation>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      subject: "",
      message: "",
    },
  });

  const feedback = feedbacks;
  const content = contentTheStudies;

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, y: "-10%" },
  };

  function handleSubmitQuestion(data: IFormProps) {
    window.location.href = `mailto:renanrapace13@gmail.com?subject=${data.subject}&body=${data.message}`;
  }

  return (
    <main className="bg-zinc-950 flex flex-col overflow-hidden">
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
          <div className="flex flex-col mt-10 lg:pb-32 lg:flex-row md:justify-center md:items-center lg:gap-40 sm:justify-center sm:items-center">
            <div className="order-2 md:max-w-[24rem] lg:order-1 lg:mt-32">
              <h1 className=" text-4xl lg:text-5xl mt-10 mb-2 font-raleway font-extrabold text-white">
                Renan Rapace
              </h1>

              <div className="flex flex-col gap-2">
                <span className="text-zinc-300 font-mono text-xl">
                  Front-end Developer / Developer Mobile
                </span>
                <span className="text-color_secondary font-mono">
                  Sou um aprendiz contínuo e apaixonado por criar experiências
                  de usuário excepcionais que inspiram e envolvem.
                </span>
              </div>

              <motion.a>
                <a href="#02" className="transition-all">
                  <Button className="mt-8 h-12 w-full gap-2 bg-color_third border font-mono text-white text-base font-extrabold  border-lime-500 shadow-2xl shadow-lime-700 lg:hover:shadow-lime-700 lg:hover:animate-pulse lg:duration-200">
                    Conheça-me
                    <ChevronRight size={20} />
                  </Button>
                </a>
              </motion.a>
            </div>

            <div className="md:rounded-full rounded-xl items-center justify-center overflow-hidden order-1 lg:order-2 md:mt-32 md:h-[25rem] ">
              <img className="w-full" src={fotoAvatar} alt="Avatar" />
            </div>
          </div>

          <div className="flex justify-center animate-bounce duration-800 mt-14 pb-10 lg:mb-28">
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
              Estudos
            </h1>
            <span className="flex text-center text-sm leading-7 text-color_secondary font-plexMono lg:max-w-[35.62rem]">
              Aqui está os 3 principais projetos que venho estudando durante a
              minha jornada como programador. Confira outros projetos
            </span>
            <a
              href="https://github.com/Sh4rk-dev?tab=repositories"
              className="text-sm leading-7 text-color_primary font-plexMono underline"
            >
              no meu Github
            </a>
          </div>

          <div className="flex flex-col">
            {content.map((content, id) => (
              <motion.div
                key={id}
                initial={
                  content.id / 2 !== 1
                    ? { opacity: 0, x: -100 }
                    : { opacity: 0, x: 100 }
                }
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
              >
                <Studies className="my-16 lg:flex lg:flex-row lg:gap-10 lg:justify-center lg:items-center md:flex-col">
                  <Studies.Image
                    className={`${content.orientation} lg:flex lg:max-w-[29.81rem]`}
                    imgURL={content.image}
                  />

                  <Studies className="lg:max-w-[28.12rem] flex flex-col justify-between lg:h-80">
                    <Studies>
                      <Studies.Tag
                        tagName={content.tag}
                        className={content.colorText}
                      />
                      <Studies.Title title={content.title} />
                      <Studies.Description description={content.description} />
                    </Studies>

                    <a href={content.buttonLink}>
                      <Button
                        className={`mt-5 w-fit gap-2 font-raleway text-white font-extrabold ${content.color} md:transition md:ease-in-out md:hover:-translate-y-1 md:hover:scale-110 md:duration-500`}
                      >
                        Acessar o repositótio
                        <ChevronRight size={18} />
                      </Button>
                    </a>
                  </Studies>
                </Studies>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section
        id="03"
        className="px-10 flex flex-col pt-10 bg-zinc-950 h-[800px] lg:px-80 lg:items-center "
      >
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
        >
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-raleway text-white mb-3 mt-10 text-4xl font-extrabold">
              Feedbacks
            </h1>
            <span className="flex lg:max-w-[35.62rem] text-center text-sm leading-7 text-color_secondary font-plexMono">
              Nesta seção, você verá os pensamentos compartilhados por outras
              pessoas sobre a experiências do meu trabalho, minhas habilidades
              ou meu desempenho.
            </span>
          </div>

          <div className="lg:max-w-[56rem] lg:px-6 flex flex-col  justify-center items-center border-white/20">
            <Carousel className="w-full justify-center flex mt-10">
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
              <div className="hidden">
                <CarouselPrevious className="z-10 bg-white hidden md:flex sm:flex" />
                <CarouselNext className="z-10 hidden md:flex sm:flex" />
              </div>
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
            <h1 className="px-8 font-raleway mt-20 mb-5 text-2xl md:text-4xl font-extrabold">
              Trabalhos Recentes
            </h1>

            <span className="flex mb-[60px] max-w-[35.62rem] text-center text-sm leading-7 text-color_secondary font-plexMono">
              Aqui está os trabalhos mais recentes e relevantes do qual eu
              faço/fiz parte.
            </span>
          </div>

          <div className="flex flex-col 1xl:flex-row gap-16 mb-20 md:items-center lg:flex lg:flex-col">
            <RecentWork
            linkButton="https://ttfalimentos.com.br/"
              url={ScreenApp}
              title="TTF Alimentos"
              description="Aplicativo para Ecommerce no ramo de panificação. Frameworks:  React Native, Expo GO e TailwindCSS. "
            />
            <RecentWork
              linkButton="https://github.com/Sh4rk-dev/my-portfolio"
              url={portfolioweb}
              title="Meu Portfolio"
              description="Esse foi o meu primeiro projeto pessoal. Framework: ReactJS, TailwindCSS e Radix-ui"
            />
          </div>
        </motion.div>
      </section>

      <section
        id="05"
        className="flex px-10 pt-20 md:pt-0 justify-center items-center bg-zinc-950 h-screen"
      >
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
        >
          <div className="px-10 flex flex-col justify-center items-center">
            <h1 className="font-raleway text-white mb-5 mt-20 md:mt-0  text-3xl md:text-4xl font-extrabold">
              Entre em Contato
            </h1>
            <span className="flex mb-[60px] text-center text-sm leading-7 text-color_secondary font-plexMono">
              Sinta-se à vontade para me enviar uma mensagem
            </span>
          </div>

          <div className="flex justify-center items-start ">
            <Form onSubmit={handleSubmit(handleSubmitQuestion)}>
              <Form.Label title="Name" />
              <Form.Input
                type="text"
                placeholder="Digite seu nome"
                {...register("name")}
              />

              <Form.Label title="Subject" />
              <Form.Input
                type="text"
                placeholder="Digite o assunto"
                {...register("subject")}
              />

              <Form.Label title="Message" />
              <Form.Textarea
                placeholder="Digite a mensagem"
                {...register("message")}
              />

              <Button
                type="submit"
                onSubmit={() => handleSubmitQuestion}
                className="mt-4 h-12 w-full gap-2 font-raleway text-white font-extrabold bg-color_third border border-lime-700 shadow-2xl shadow-lime-700 hover:shadow-lime-700 hover:animate-pulse duration-200"
              >
                Entrar em contato
                <Mail size={18} />
              </Button>
            </Form>
          </div>
        </motion.div>
      </section>

      <footer className="w-full h-24 mt-40 flex flex-col items-center justify-center md:h-[70px] md:-mt-16 md:flex-row md:pt-0 md:justify-between md:px-20 bg-color_primary">
        <h1 className="text-white">Copyright © Renan Rapace · 2024</h1>

        <div className="flex flex-row gap-2 pt-px">
          <MapPin color="#fff" />
          <h1 className="text-white">São Paulo, SP - Brasil</h1>
        </div>
      </footer>
    </main>
  );
}
