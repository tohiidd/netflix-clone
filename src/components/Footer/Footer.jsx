import { useLocation } from "react-router";
import "./footer.css";

function Footer({ bgColor }) {
  const location = useLocation();
  return (
    <section className={`${bgColor}`}>
      <div className="one-story-card-footer mx-auto">
        <div className="py-12 mx-8 md:mx-20">
          <p className="mb-6">
            Questions? Call
            <a href="tel:0800-000-7969">0800-000-7969</a>
          </p>
          <ul className="one-story-card-footer-list text-sm">
            <li className="mb-3 inline-block pr-4">
              <a href>
                <span>FAQ</span>
              </a>
            </li>
            <li className="mb-3 inline-block pr-4">
              <a href>
                <span>Help Center</span>
              </a>
            </li>
            <li className="mb-3 inline-block pr-4">
              <a href>
                <span>Account</span>
              </a>
            </li>
            <li className="mb-3 inline-block pr-4">
              <a href>
                <span>Media Center</span>
              </a>
            </li>
            <li className="mb-3 inline-block pr-4">
              <a href>
                <span>Investor Relations </span>
              </a>
            </li>
            <li className="mb-3 inline-block pr-4">
              <a href>
                <span>Jobs </span>
              </a>
            </li>

            {location.pathname === "/SignIn" ||
            location.pathname === "/SignUp" ? null : (
              <>
                <li className="mb-3 inline-block pr-4">
                  <a href>
                    <span>Redeem Gift Cards </span>
                  </a>
                </li>
                <li className="mb-3 inline-block pr-4">
                  <a href>
                    <span>Buy Gift Cards</span>
                  </a>
                </li>
                <li className="mb-3 inline-block pr-4">
                  <a href>
                    <span>Ways to Watch</span>
                  </a>
                </li>
                <li className="mb-3 inline-block pr-4">
                  <a href>
                    <span>Terms of Use</span>
                  </a>
                </li>
                <li className="mb-3 inline-block pr-4">
                  <a href>
                    <span>Privacy</span>
                  </a>
                </li>
                <li className="mb-3 inline-block pr-4">
                  <a href>
                    <span>Cookie Preferences</span>
                  </a>
                </li>
                <li className="mb-3 inline-block pr-4">
                  <a href>
                    <span>Impressum</span>
                  </a>
                </li>
                <li className="mb-3 inline-block pr-4">
                  <a href>
                    <span>Contact Us</span>
                  </a>
                </li>
                <li className="mb-3 inline-block pr-4">
                  <a href>
                    <span>Speed Test</span>
                  </a>
                </li>
                <li className="mb-3 inline-block pr-4">
                  <a href>
                    <span>Legal Notices</span>
                  </a>
                </li>
              </>
            )}
          </ul>
          <div className="my-4">
            <select
              name
              id
              className={`bg-transparent border p-0.5 md:p-2 border-solid rounded-sm border-gray-800`}
            >
              <option value>English</option>
              <option value>Espanol</option>
            </select>
          </div>
          {location.pathname === "/" && (
            <p className="text-sm mt-4">Netflix Germany</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Footer;
