export function Titulo(props){
    return(
        <h2 
            className='mb-4 text-white text-2xl font-extrabold leading-none tracking-tight
            md:text-3xl lg:text-4xl dark:text-white'
        >

            {props.children}
        </h2>
    );
}