import { ComponentType } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

function withLayout<P extends JSX.IntrinsicAttributes>(
  WrappedComponent: ComponentType<P>
): React.FC<P> {
  const LayoutComponent: React.FC<P> = (props) => {
    return (
      <div>
        <Header />
        <WrappedComponent {...props} />
        <Footer />
      </div>
    );
  };

  return LayoutComponent;
}

export default withLayout;
