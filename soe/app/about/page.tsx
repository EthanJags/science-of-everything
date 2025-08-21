import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero section with image on right */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl mb-6">
            Welcome to our company. We are dedicated to providing exceptional
            solutions that make a difference in people's lives.
          </p>
          <p className="mb-6">
            Founded in [year], our mission has always been to [mission
            statement]. We believe in [core values] and strive to [vision
            statement].
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          {/* Image placeholder - replace with your actual image */}
          <div className="bg-gray-200 rounded-lg w-full max-w-md aspect-[4/3] flex items-center justify-center">
            <Image
              src="/assets/JamesFodor.png"
              alt="About Us"
              width={500}
              height={375}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Company story section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
              auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
            </p>
            <p>
              Ut in nulla enim. Phasellus molestie magna non est bibendum non
              venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.
              Mauris iaculis porttitor posuere. Praesent id metus massa, ut
              blandit odio.
            </p>
          </div>
          <div>
            <p className="mb-4">
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris.
            </p>
            <p>
              Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor
              a ornare odio. Sed non mauris vitae erat consequat auctor eu in
              elit. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.
            </p>
          </div>
        </div>
      </div>

      {/* Team section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Team member card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
              <span className="text-gray-500">Photo</span>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">
              Team Member Name
            </h3>
            <p className="text-gray-600 text-center mb-2">Position</p>
            <p className="text-gray-700 text-center">
              Brief description about this team member and their role in the
              company.
            </p>
          </div>

          {/* Team member card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
              <span className="text-gray-500">Photo</span>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">
              Team Member Name
            </h3>
            <p className="text-gray-600 text-center mb-2">Position</p>
            <p className="text-gray-700 text-center">
              Brief description about this team member and their role in the
              company.
            </p>
          </div>

          {/* Team member card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
              <span className="text-gray-500">Photo</span>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">
              Team Member Name
            </h3>
            <p className="text-gray-600 text-center mb-2">Position</p>
            <p className="text-gray-700 text-center">
              Brief description about this team member and their role in the
              company.
            </p>
          </div>
        </div>
      </div>

      {/* Contact section */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <div className="bg-gray-100 p-8 rounded-lg">
          <p className="text-gray-700 mb-4">
            We'd love to hear from you! Whether you have questions about our
            services, want to collaborate, or just want to say hello, don't
            hesitate to reach out.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">
                Contact Information
              </h3>
              <p className="text-gray-700 mb-1">Email: info@yourcompany.com</p>
              <p className="text-gray-700 mb-1">Phone: (123) 456-7890</p>
              <p className="text-gray-700">
                Address: 123 Business Street, City, Country
              </p>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">Hours of Operation</h3>
              <p className="text-gray-700 mb-1">Monday - Friday: 9AM - 5PM</p>
              <p className="text-gray-700 mb-1">Saturday: 10AM - 2PM</p>
              <p className="text-gray-700">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
