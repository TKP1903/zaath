import React from 'react'

const Clients = () => {
  const clientLogos = [
    {
      name: "MINT LEAVES",
      logo: "https://img.freepik.com/free-vector/fresh-green-mint-leaves-logo-design_337180-606.jpg"
    },
    {
      name: "HOMEMADE FOOD",
      logo: "https://dcassetcdn.com/design_img/1871193/537357/537357_10136505_1871193_f3cdfd67_image.jpg"
    },
    {
      name: "KITCHEN",
      logo: "https://i.pinimg.com/736x/76/1d/b8/761db822cc6efc3c2883cd2e1434afba.jpg"
    },
    {
      name: "HOME COOKED",
      logo: "https://www.paolivillageshoppes.com/wp-content/uploads/homecooked-placement-logo.jpg"
    },
    {
      name: "Thick Shake Factory",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcHHGXZ3F0KX33d_cs7IrOjGQ5yaibw35P1Z3J3jh11g&s"
    },
    {
      name: "MINT LEAVES",
      logo: "https://img.freepik.com/free-vector/fresh-green-mint-leaves-logo-design_337180-606.jpg"
    },
    {
      name: "HOMEMADE FOOD",
      logo: "https://dcassetcdn.com/design_img/1871193/537357/537357_10136505_1871193_f3cdfd67_image.jpg"
    },
    {
      name: "KITCHEN",
      logo: "https://i.pinimg.com/736x/76/1d/b8/761db822cc6efc3c2883cd2e1434afba.jpg"
    },
    {
      name: "HOME COOKED",
      logo: "https://www.paolivillageshoppes.com/wp-content/uploads/homecooked-placement-logo.jpg"
    },
    {
      name: "Thick Shake Factory",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcHHGXZ3F0KX33d_cs7IrOjGQ5yaibw35P1Z3J3jh11g&s"
    },
  ]
  return (
    <>
    {/* <div className="hidden md:block w-full h-screen mx-10">
            <img src="https://dnyhospitality.com/wp-content/uploads/2022/03/Front-page-logo-02-7-1024x673.jpg" alt="" className="w-full h-full"/>
        </div> */}
        <div className="flex flex-wrap items-center justify-around gap-6">
          {clientLogos.map((data) => (
            <div className="flex flex-row items-center justify-around gap-3 border-2 w-full lg:w-80 mx-4 h-36 rounded-lg px-4 shadow-sm">
              <div className="w-36 h-38">
                <img src={data.logo} alt="" className="w-full h-full"/>
              </div>
              <h4 className="text-xl font-semibold px-4 dark:text-gray-50">{data.name}</h4>
            </div>
          )) 

          }
        </div>
        {/* <div className="md:hidden w-full h-screen mx-10">
            <img src="https://dnyhospitality.com/wp-content/uploads/2022/03/Inventory-management-27.png" alt="" className="w-full h-full"/>
        </div> */}
    </>
  )
}

export default Clients