import {
  InstagramIcon,
  Linkedin,
  Locate,
  LocateIcon,
  Mail,
  PhoneCall,
  Send,
  TwitterIcon,
} from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get in <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Feel free to contact me for collaborations or projects.Have a project
          in mind? Reach out anytime.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-2xl font-extrabold mb-6">
              Contact Information
            </h2>
            <div className="space-y-6 justify-center ">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    className="hover:text-primary"
                    href="mailto:abcd@gmail.com"
                  >
                    abcd@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <PhoneCall className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  {/* <a className="hover:text-primary" href="tel:">*******</a> */}
                  <p className="text-muted-foreground text-sm">
                    Available On Request
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <LocateIcon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-muted-foreground text-sm">
                    Navi Mumbai , India
                  </p>
                </div>
              </div>
              <div className="pt-8">
                <h2 className="font-extrabold mb-4">Connect With Me</h2>
                <div className="flex space-x-5">
                  <a href="#" target="_blank">
                    <Linkedin size={30} />
                  </a>
                  <a href="#" target="_blank">
                    <InstagramIcon size={30} />
                  </a>
                  <a href="#" target="_blank">
                    <TwitterIcon size={30} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
