function Container({ children, ...rest }) {
  return (
    <div className="container" {...rest}>
      {children}
    </div>
  );
}

export default Container;
