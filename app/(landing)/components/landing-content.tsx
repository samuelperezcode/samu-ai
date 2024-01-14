import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const testimonials = [
  {
    name: 'John Doe',
    title: 'CEO',
    avatar: 'J',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat.'
  },
  {
    name: 'Mary Jane',
    title: 'CTO',
    avatar: 'M',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat.'
  },
  {
    name: 'Peter Parker',
    title: 'SDE',
    avatar: 'P',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat.'
  },
  {
    name: 'Bruce Wayne',
    title: 'CFO',
    avatar: 'B',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat.'
  }
]

export function LandingContent() {
  return (
    <section className="px-10 py-20">
      <h3 className="text-4xl text-center font-extrabold text-white mb-10">Testimonials</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          testimonials.map( testimonial => (
            <Card key={testimonial.name} className="border-none bg-[#192339] text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2">
                  <div>
                    <h4 className="text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-zinc-400">{testimonial.title}</p>
                  </div>
                </CardTitle>
                <CardContent className="pt-4 px-0">
                  {testimonial.content}
                </CardContent>
              </CardHeader>
            </Card>
          ))
        }
      </div>
    </section>
  )
}
