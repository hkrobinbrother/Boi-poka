import bannerImg from '../../assets/books.jpg'

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img className='rounded-lg'
          src={bannerImg}
        />
        <div>
          <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
          
          <button className="btn mt-5 bg-[#23BE0A]">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
