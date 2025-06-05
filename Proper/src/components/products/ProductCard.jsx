import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const ProductCard = ({
  name,
  price,
  description,
  imageUrl,
  categoria,
  onClick
}) => {
  return (
    <Card onClick={onClick} className="cursor-pointer flex flex-col h-[300px]">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="absolute inset-0 w-full h-full object-contain hover:scale-110 duration-75 p-5"
        />
      </div>
      <CardHeader className="flex-grow">
        <CardTitle className="text-lg">{name}</CardTitle>
        {/* <CardDescription className="text-sm line-clamp-1">{description}</CardDescription> */}
      </CardHeader>
    </Card>
  );
};

export default ProductCard;

