import { ReactNode } from "react";

export default function GlassCard({

children,

}:{children:ReactNode}){

return(

<div

className="

rounded-3xl

border

border-white/10

bg-white/[0.03]

backdrop-blur-xl

p-8

transition-all

duration-300

hover:border-blue-500/40

hover:-translate-y-1

"

>

{children}

</div>

)

}