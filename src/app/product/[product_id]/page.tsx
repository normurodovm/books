"use client"
import { useParams } from 'next/navigation';

const ProductDetail = () => {
  const { product_id } = useParams();

  const users = [
    {  id: "1", title: "1984", text: "SIYOSAT, FANTASTIKA",image:"/image1.png" },
    {  id: "2", title: "Rich dad poor dad", text: "SIYOSAT, FANTASTIKA",image:"/image2.png" },
    {  id: "3", title: "Код 8", text: "SIYOSAT, FANTASTIKA",image:"/image3.png" },
    {  id: "4", title: "Даниел КИЗ", text: "SIYOSAT, FANTASTIKA",image:"/image4.png" },
    {  id: "5", title: "Бепарволикнинг но...", text: "SIYOSAT, FANTASTIKA",image:"/image5.png" },
    {  id: "6", title: "1984", text: "SIYOSAT, FANTASTIKA",image:"/image6.png" },
    {  id: "7", title: "Даниел КИЗ", text: "SIYOSAT, FANTASTIKA",image:"/image7.png" },
    {  id: "8", title: "Бепарволикнинг", text: "SIYOSAT, FANTASTIKA",image:"/image8.png" },
  ];

  const user = users.find((user) => user.id === product_id);

  if (!user) {
    return <div>Foydalanuvchi topilmadi</div>;
  }

  return (
    <div className='w-[1240px] mx-auto p-5 '>
      <div className='flex items-center gap-[100px]'>
        <img className='w-[318px]' src={user.image} alt="img" />
        <div>
          <h1 className='font-extrabold text-[30px] '>{user.title}</h1>
          <p className='text-[20px] text-blue-500' >{user.text}</p>
          <p className='w-[600px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem repudiandae voluptatibus modi vero in corrupti error, dolores doloremque quod dignissimos illum nam illo molestiae nulla! Voluptates tempora itaque ipsa accusantium facilis aperiam fuga impedit. Officia voluptates eum, voluptatum ratione corrupti repudiandae repellendus nihil fugit, tempora hic quibusdam placeat aspernatur odio commodi maiores animi ad non eaque omnis dolorum accusamus est aut cum! Reprehenderit sint vero iure in voluptate, accusamus voluptatibus consectetur tempore aliquid non quisquam quo! Ad commodi esse veritatis enim sapiente fugiat sit quis fugit nesciunt nulla, sunt dolores ullam repellat hic rerum cumque ipsa repellendus! Culpa, odit beatae!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
