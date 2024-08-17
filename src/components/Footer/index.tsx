import { listFooter } from "../../utils/contants";
import { TitleFooterT } from "../../utils/types";

const Footer = () => {
  return (
    <footer className="w-full flex min-h-80 bg-footer items-center bg-cover -mt-80 pt-32 pb-20 lg:py-0">
      <div className="flex flex-row flex-wrap container gap-16 lg:gap-28 justify-center">
        {listFooter.map((item: TitleFooterT) => (
          <div key={item.title} className="flex flex-col max-w-60 gap-2">
            <div className="uppercase font-extrabold text-white">
              {item.title}
            </div>
            {item.subTitle.map((subItem) => (
              <div key={subItem.name} className="text-white">
                {subItem.name}
              </div>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
