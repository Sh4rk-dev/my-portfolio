import { useState } from "react";

import { useForm } from "react-hook-form";

import { ChevronRight, ChevronsDown, Menu } from "lucide-react";

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

export function App() {
  const [isActive, setIsActive] = useState<boolean>(false);

  const { register, handleSubmit } = useForm<IFormProps>();

  const feedback = feedbacks;

  function handleSubmitQuestion(data: IFormProps) {
    console.log(data);
  }

  return (
    <main className="bg-zinc-950 flex flex-col">
      <div className="flex w-full justify-start z-50 items-center py-2 fixed bg-color_primary lg:hidden">
        <Button onClick={() => setIsActive(!isActive)}>
          <Menu color="#fff" size={32} />
        </Button>
        <h1 className="font-raleway text-white text-lg">Menu</h1>
      </div>

      {isActive && (
        <div className="w-full h-fit px-10 z-50 mt-14 fixed bg-color_primary lg:hidden animate-flip-down animate-once animate-duration-1000 animate-ease-in-out ">
          <Header />
        </div>
      )}

      <div className="hidden lg:flex lg:px-40 lg:w-full lg:justify-center">
        <Header />
      </div>

      <section className="px-10 pt-14 lg:px-20 lg:pt-0 h-screen lg:h-fit">
        <div className="flex flex-col mt-10 lg:pb-32 lg:flex-row md:justify-center md:items-center lg:gap-40">
          <div className="order-2 md:max-w-[24rem] lg:order-1 lg:mt-32">
            <h1 className=" text-4xl lg:text-5xl mt-10 mb-2 font-raleway font-extrabold text-white">
              Renan Rapace
            </h1>

            <span className="text-color_secondary font-mono">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              nesciunt quod rerum unde soluta asperiores dolorum nostrum.
            </span>

            <Button className="mt-8 h-12 w-full gap-2 bg-color_third border font-mono text-white text-base font-extrabold  border-lime-700 shadow-2xl shadow-lime-700 lg:hover:shadow-lime-700 lg:hover:animate-pulse lg:duration-200">
              Let’s get started
              <ChevronRight size={20} />
            </Button>
          </div>

          <div className="rounded-xl items-center justify-center overflow-hidden order-1 lg:order-2 md:mt-32 md:h-[25rem] ">
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
      </section>

      <section
        id="01"
        className="px-10 flex flex-col bg-white pt-20 mt-32 lg:mt-0 items-center lg:px-80 md:bg-gray-300-500 "
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-raleway mb-5 text-4xl font-extrabold">
            Case Studies
          </h1>
          <span className="flex text-center text-sm leading-7 text-color_secondary font-plexMono lg:max-w-[35.62rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsa,
            explicabo eum aut, fugit laudantium ipsam veritatis culpa veniam
            blanditiis adipisci consequuntur laborum qui corporis expedita!
            Similique rem laboriosam autem.
          </span>
        </div>

        <div className="flex flex-col">
          <Studies className="mt-16 lg:flex lg:flex-row lg:gap-10 lg:justify-center lg:items-center md:flex-col">
            <Studies.Image
              className="order-1 lg:order-2 lg:flex lg:max-w-[27.81rem] lg:max-h-[18.85rem]"
              imgURL="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />

            <Studies className="lg:max-w-[28.12rem]">
              <Studies.Tag tagName="Fintech" className="text-_orange" />
              <Studies.Title title="Work name here" />
              <Studies.Description
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              voluptatibus molestias veniam cupiditate reiciendis modi,
              necessitatibus repellendus delectus error deserunt quasi ut
              quaerat quos rem? Amet provident saepe temporibus quaerat!"
              />

              <Button className="mt-5 w-full gap-2 font-raleway text-white font-extrabold bg-_orange">
                View case study
                <ChevronRight size={18} />
              </Button>
            </Studies>
          </Studies>

          <Studies className="mt-16 lg:flex lg:flex-row lg:gap-10 lg:justify-center lg:items-center">
            <Studies.Image
              className="order-1 lg:-order-1 lg:flex lg:max-w-[27.81rem] lg:max-h-[18.85rem]"
              imgURL="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />

            <Studies className="lg:max-w-[28.12rem]">
              <Studies.Tag
                tagName="EdTech"
                className="bg-blue-100 text-blue-600"
              />
              <Studies.Title title="Work name here" />
              <Studies.Description
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              voluptatibus molestias veniam cupiditate reiciendis modi,
              necessitatibus repellendus delectus error deserunt quasi ut
              quaerat quos rem? Amet provident saepe temporibus quaerat!"
              />

              <Button className="mt-5 w-full gap-2 font-raleway text-white font-extrabold bg-blue-600">
                View case study
                <ChevronRight size={18} />
              </Button>
            </Studies>
          </Studies>

          <Studies className="mt-16 lg:flex lg:flex-row lg:gap-10 lg:justify-center lg:items-center mb-20">
            <Studies.Image
              className="order-1 lg:order-2 lg:flex lg:max-w-[27.81rem] lg:max-h-[18.85rem]"
              imgURL="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />

            <Studies className="lg:max-w-[28.12rem]">
              <Studies.Tag
                tagName="Fintech"
                className="text-emerald-500 bg-emerald-100"
              />
              <Studies.Title title="Work name here" />
              <Studies.Description
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              voluptatibus molestias veniam cupiditate reiciendis modi,
              necessitatibus repellendus delectus error deserunt quasi ut
              quaerat quos rem? Amet provident saepe temporibus quaerat!"
              />

              <Button className="mt-5 w-full gap-2 font-raleway text-white font-extrabold bg-emerald-500 ">
                View case study
                <ChevronRight size={18} />
              </Button>
            </Studies>
          </Studies>
        </div>
      </section>

      <section
        id="02"
        className="px-10 flex flex-col pt-20 bg-zinc-950 h-screen lg:px-80 lg:items-center "
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-raleway text-white mb-3 text-4xl font-extrabold">
            Testimonials
          </h1>
          <span className="flex lg:max-w-[35.62rem] text-center text-sm leading-7 text-color_secondary font-plexMono">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsa,
            explicabo eum aut, fugit laudantium ipsam veritatis culpa veniam
            blanditiis.
          </span>
        </div>

        <div className="lg:max-w-[56rem] lg:px-6 flex flex-col mt-6 justify-center items-center border-white/20">
          <Carousel className="w-full md:w-[565px] mt-10 md:mt-32">
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
            <CarouselPrevious className="z-40 bg-white hidden md:flex" />
            <CarouselNext className="z-40 hidden md:flex" />
          </Carousel>
        </div>
      </section>

      <section
        id="03"
        className="px-10 flex flex-col bg-white items-center lg:px-80  md:items-center"
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
      </section>

      <section id="04" className="px-10 pt-20 bg-zinc-950 h-screen">
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
      </section>

      <footer className="w-full h-14 mt-20 md:h-[70px] md:-mt-16 flex items-center justify-center bg-color_primary">
        <h1 className="text-white">Renan Rapace</h1>
      </footer>
    </main>
  );
}
