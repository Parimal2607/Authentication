const FullLayout = ({ children }) => {
  return (
    <section className="mid-section full">
      <div className="blur-effect"></div>
      <div className="full-height">
        <div className="w-100">{children}</div>
      </div>
    </section>
  );
};

export default FullLayout;
