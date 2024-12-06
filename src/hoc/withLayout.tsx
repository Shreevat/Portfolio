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
        <div className="min-h-screen">
          <WrappedComponent {...props} />
        </div>
        <Footer />
      </div>
    );
  };

  return LayoutComponent;
}

export default withLayout;
