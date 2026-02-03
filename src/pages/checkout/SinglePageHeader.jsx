export default function SinglePageHeader(){
  return (
    <div className="container-fluid page-header py-5">
      <h1
        className="text-center text-white display-6 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        Cheackout Page
      </h1>

      <ol
        className="breadcrumb justify-content-center mb-0 wow fadeInUp"
        data-wow-delay="0.3s"
      >
        <li className="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Pages</a>
        </li>
        <li className="breadcrumb-item active text-white">
          Cheackout
        </li>
      </ol>
    </div>
  );
}
