import React from 'react'

function Footer() {
  return (
    <footer className="w-full  flex justify-between px-20 text-white pt-[162px] pb-[62px] gap-[60px]" 
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(68, 40, 8, 1), rgba(68, 40, 8, 0.8)), 
          url('/footer/fotter_image.png')
        `,
        backgroundPosition: "center center, center center",
        backgroundSize: "cover, cover",
        backgroundRepeat: "no-repeat, no-repeat",
      }}>
        <ul className="gap-5">
          <h3 className="font-ClickerScript text-5xl">Bean Scene</h3>
          <p className="text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
          </div>
        </ul>
        <ul className="text-lg">
          <h3 className="font-medium text-2xl mb-[55px]">About</h3>
          <a href="#">Menu</a>
          <a href="#">Features</a>
          <a href="#">News & Blogs</a>
          <a href="#">Help & Supports</a>
        </ul>
        <ul className="text-lg">
          <h3 className="font-medium text-2xl mb-[55px]">Company</h3>
          <a href="#">How we work</a>
          <a href="#">Terms of service</a>
          <a href="#">Pricing</a>
          <a href="#">FAQ</a>
        </ul>
        <ul className="text-lg">
          <h3 className="font-medium text-2xl mb-[55px]">Contact Us</h3>
          <li>
            Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016
          </li>
          <li>+1 202-918-2132</li>
          <li>beanscene@mail.com</li>
          <li>www.beanscene.com</li>
        </ul>
      </footer>
  )
}

export default Footer