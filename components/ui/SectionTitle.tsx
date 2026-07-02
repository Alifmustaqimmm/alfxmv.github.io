interface Props{

title:string;

subtitle:string;

}

export default function SectionTitle({

title,

subtitle,

}:Props){

return(

<div className="mb-20 text-center">

<p className="mb-3 font-medium text-blue-400">

{subtitle}

</p>

<h2 className="text-5xl font-bold">

{title}

</h2>

</div>

)

}