"use client"

import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useEffect, useState } from "react"

const reviews = [
  {
    age: 25,
    pronouns: "She/Her",
    sessions: "12-15",
    text: "My therapist totally gets me that's all I would say! She provides me with her POV which expands my bandwidth and helps me understand more.",
    highlight: "Nothing in particular but everything in totality",
    rating: 5,
  },
  {
    age: 26,
    pronouns: "He/Him",
    sessions: "15",
    text: "It's great, very safe space to open up and discuss all the concerns.",
    highlight: "How easily I was moulded into correct mind set",
    rating: 5,
  },
  {
    age: 21,
    pronouns: "She/Her",
    sessions: "8",
    text: "It has definitely helped more than I ever expected. She is easy to talk to and created a much needed safe space for me.",
    highlight: "She always speaks calmly and in a soft tone which is very comforting",
    rating: 5,
  },
  {
    age: 24,
    pronouns: "She/Her",
    sessions: "15",
    text: "The therapist created such a safe and supportive space. And the non-judgemental approach has made it easier for me to open up and explore things. The whole process helped me develop coping strategies and better understanding of things I have struggled with for a long time. I'm grateful for your presence and professionalism, and I look forward to continuing our work together.",
    rating: 5,
  },
  {
    age: 30,
    pronouns: "She/Her",
    sessions: "5-6",
    text: "It was a very effective experience. I felt seen and heard. I had so much bottled up and I knew I had to work on it but I didn't know how to go about. Reetika gradually helped me step by step and it's brought me so much healing and I am beyond grateful.",
    highlight: "She really made me feel heard and understood, so I felt safe to share whatever I felt was wrong.",
    rating: 5,
  },
  {
    age: 30,
    pronouns: "She/Her",
    sessions: "12",
    text: "Extremely beneficial. Reetika Shah has been extremely supportive and she has helped me grow ahead in my life.",
    highlight: "I learned how to voice my mind and it is the best lesson.",
    rating: 5,
  },
  {
    age: 26,
    pronouns: "He/Him",
    sessions: "15+",
    text: "Reetika has been great since the first session. This whole process gives me space to think for myself and navigate better through my hardships. That one hour of session is my safe space to which I can fall back on in my need of the hour and just really bring out what I truly feel.",
    highlight: "Her solution oriented approach and the fact that she doesn't hesitate giving her 2 cents occasionally.",
    rating: 5,
  },
  {
    age: 22,
    pronouns: "He/Him",
    sessions: "14",
    text: "Great, made a lot of progress in the last few months. Have a long way to go though.",
    highlight: "I struggle to open up, she made me feel comfortable and created a non-judgemental space which helped me get my struggles out there.",
    rating: 5,
  },
  {
    age: 21,
    pronouns: "He/Him",
    sessions: "7",
    text: "Very supportive and understanding. She has been very balanced I feel.",
    highlight: "She empathised with my situation very well, I did not feel that I was just a patient. I think she understood the reason I was feeling so and so.",
    rating: 5,
  },
  {
    age: 23,
    pronouns: "She/Her",
    sessions: "10",
    text: "Reetika has been a constant support and moreover a really good listener. All I wanted was someone to listen and she does that for me. Gives me a new perspective of seeing things which is helping a lot.",
    rating: 5,
  },
  {
    age: 26,
    pronouns: "She/Her",
    sessions: "10",
    text: "It has been good. Reetika has been really helpful and has helped me better myself.",
    highlight: "I really like that she makes sure that the answers or solutions to my concerns comes from me rather than her. It helps me use similar techniques for next time.",
    rating: 4,
  },
  {
    age: 22,
    pronouns: "She/Her",
    sessions: "5",
    text: "The sessions felt comfortable and had easy communication. I was able to express myself without any issues and was given apt advices.",
    highlight: "I was able to open up freely.",
    rating: 5,
  },
  {
    age: 25,
    pronouns: "",
    sessions: "",
    text: "Simple, safe and comfortable.",
    highlight: "The attention provided by her and the safe space to share anything without any fear of judgement.",
    rating: 5,
  },
]


export function Reviews() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section id="reviews" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-balance">Client experiences</h2>
          <p className="text-xl text-muted-foreground">Feedback from those who've done the work</p>
        </div>

        <div className="px-12">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="p-6 border-2 h-full flex flex-col">
                    <p className="text-base mb-4 leading-relaxed text-pretty flex-grow">"{review.text}"</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto pt-4 border-t">
                      <span className="font-semibold text-foreground">
                        {review.age ? `${review.age}` : "Client"}
                        {review.pronouns && ` (${review.pronouns})`}
                      </span>
                      {review.sessions && <span>{review.sessions} sessions</span>}
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === current
                    ? "bg-[var(--orange)] w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
