import { ChevronRight, ChevronsDown } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel/carousel";

import { Header } from "./components/header";
import { Button } from "@/components/ui/button";
import { CarouselItemContent } from "./components/ui/carousel/carouselItem";
import { feedbacks } from "./moked/FEEDBACKS";
import { RecentWork } from "./components/work";
import { Form } from "./components/form";

export function App() {
  const feedback = feedbacks;

  return (
    <>
      <section className="bg-zinc-950 h-screen">
        <div className="flex mx-96 justify-center">
          <Header />
        </div>

        <div className="flex h-[720px] mt-10 gap-48 items-center justify-center">
          <div className="w-96 justify-center items-start">
            <h1 className="text-5xl mb-6 font-raleway font-extrabold text-white">
              Renan Rapace
            </h1>
            <span className="text-color_secundary font-mono">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              nesciunt quod rerum unde soluta asperiores dolorum nostrum
              mollitia facere laudantium animi et libero ipsum blanditiis quo
              architecto excepturi quos doloribus.
            </span>
            <Button className="mt-8 w-72 h-12 gap-2 bg-color_third border font-mono text-white font-bold border-lime-700 shadow-2xl shadow-lime-700 hover:shadow-lime-700 hover:animate-pulse duration-200">
              Let’s get started
              <ChevronRight size={18} />
            </Button>
          </div>

          <div className="flex w-96 h-[400px] bg-white justify-center items-center text-2xl font-bold rounded-3xl text-white overflow-hidden shadow-lg shadow-color_primary">
            <img className="" src="/src/assets/avatar.jpg" alt="Avatar" />
          </div>
        </div>

        <div className="flex justify-center animate-bounce duration-800">
          <ChevronsDown size={40} color="#fff" />
        </div>
      </section>

      <section className="flex flex-col mt-28 items-center">
        <div className="flex w-[897px] flex-col justify-center items-center">
          <h1 className="font-raleway mb-5 text-4xl font-extrabold">
            Case Studies
          </h1>
          <span className="flex w-[620px] mb-[60px] text-center text-sm leading-7 text-color_secundary font-plexMono">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsa,
            explicabo eum aut, fugit laudantium ipsam veritatis culpa veniam
            blanditiis adipisci consequuntur laborum qui corporis expedita!
            Similique rem laboriosam autem.
          </span>
        </div>

        <div className="flex flex-1 h-[300px] gap-5 mb-20 items-center">
          <div className="flex flex-col justify-center items-start">
            <p className="py-1 px-3 mb-2 font-plexMono text-xs text-_orange font-extrabold bg-_orangeBackGround rounded-full">
              Fintech
            </p>

            <h2 className="font-raleway font-bold text-2xl mb-3">
              Work name here
            </h2>

            <span className="font-plexMono text-color_secundary w-[520px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              voluptatibus molestias veniam cupiditate reiciendis modi,
              necessitatibus repellendus delectus error deserunt quasi ut
              quaerat quos rem? Amet provident saepe temporibus quaerat!
            </span>

            <Button className="mt-10 gap-2 font-raleway text-white font-extrabold bg-_orange">
              View case study
              <ChevronRight size={18} />
            </Button>
          </div>

          <div className="w-[520px] h-full overflow-hidden rounded-lg">
            <img
              src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>

        {/* ddddddddddddd */}

        <div className="flex flex-1 h-[300px] gap-5 mb-20 items-center">
          <div className="w-[520px] h-full overflow-hidden rounded-lg">
            <img
              src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>

          <div className="flex flex-col justify-center items-start">
            <p className="py-1 px-3 mb-2 font-plexMono text-xs text-blue-600 font-extrabold bg-blue-100 rounded-full">
              Fintech
            </p>

            <h2 className="font-raleway font-bold text-2xl mb-3">
              Work name here
            </h2>

            <span className="font-plexMono text-pretty text-color_secundary w-[520px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              voluptatibus molestias veniam cupiditate reiciendis modi,
              necessitatibus repellendus delectus error deserunt quasi ut
              quaerat quos rem? Amet provident saepe temporibus quaerat!
            </span>

            <Button className="mt-10 gap-2 font-raleway text-white font-extrabold bg-blue-600">
              View case study
              <ChevronRight size={18} />
            </Button>
          </div>
        </div>

        {/* sddddddddddd */}

        <div className="flex flex-1 h-[300px] gap-5 mb-20 items-center">
          <div className="flex flex-col justify-center items-start">
            <p className="py-1 px-3 mb-2 font-plexMono text-xs text-emerald-500 font-extrabold bg-emerald-100 rounded-full">
              Fintech
            </p>

            <h2 className="font-raleway font-bold text-2xl mb-3">
              Work name here
            </h2>

            <span className="font-plexMono text-color_secundary w-[520px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              voluptatibus molestias veniam cupiditate reiciendis modi,
              necessitatibus repellendus delectus error deserunt quasi ut
              quaerat quos rem? Amet provident saepe temporibus quaerat!
            </span>

            <Button className="mt-10 gap-2 font-raleway text-white font-extrabold bg-emerald-500">
              View case study
              <ChevronRight size={18} />
            </Button>
          </div>

          <div className="w-[520px] h-full overflow-hidden rounded-lg">
            <img
              src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="flex-col pt-28 bg-zinc-950 h-screen">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-raleway text-white mb-5 text-4xl font-extrabold">
            Testimonials
          </h1>
          <span className="flex w-[620px] mb-[60px] text-center text-sm leading-7 text-color_secundary font-plexMono">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsa,
            explicabo eum aut, fugit laudantium ipsam veritatis culpa veniam
            blanditiis.
          </span>
        </div>

        <div className="w-full flex flex-col justify-center items-center border-white/20">
          <Carousel className="flex w-96">
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
            <CarouselPrevious className="z-50 bg-white" />
            <CarouselNext className="z-50" />
          </Carousel>
        </div>
      </section>

      <section className="flex flex-col mt-28 items-center">
        <div className="flex w-[897px] flex-col justify-center items-center">
          <h1 className="font-raleway mb-5 text-4xl font-extrabold">
            Recent Work
          </h1>
          <span className="flex w-[620px] mb-[60px] text-center text-sm leading-7 text-color_secundary font-plexMono">
            Solving user & business problems since last 15+ years.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </span>
        </div>

        <div className="flex w-full justify-center flex-row gap-9 mb-20">
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

      <section className="pt-20 bg-zinc-950 h-screen">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-raleway text-white mb-5 text-4xl font-extrabold">
            Get In Touch
          </h1>
          <span className="flex w-[620px] mb-[60px] text-center text-sm leading-7 text-color_secundary font-plexMono">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
          <div className="flex items-center"></div>
        </div>

        <Form>
          <Form.Input type="text" placeholder="Teste" className="" />
        </Form>
      </section>
    </>
  );
}
