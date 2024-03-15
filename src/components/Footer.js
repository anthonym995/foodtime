const Footer = () => {
  return (
    <footer className="footer bg-red-600 shadow-md text-white font-semibold py-3">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="w-full flex">
            <h3 className="mr-8">FoodTime</h3>
            <p>&copy; 2023. All rights reserved.</p>
          </div>
          <div className="w-full flex">
            <h3 className="mr-8">Contact Us</h3>
            <p>Email: info@foodtime.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
