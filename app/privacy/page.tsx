import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Quilt Binding Calculator",
  description: "Privacy policy for the Quilt Binding Calculator website. Learn how we collect, use, and protect your information.",
  keywords: "privacy policy, quilt binding calculator, data protection, privacy",
};

export default function PrivacyPage() {
  return (
    <div className="py-12 bg-[#EFEBE9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-[#5D4037] sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
            Last updated: March 7, 2025
          </p>
        </div>
        
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="p-8">
            <div className="prose prose-brown max-w-none">
              <p>
                This Privacy Policy describes how Quilt Binding Calculator (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and shares information when you use our website (the &ldquo;Service&rdquo;).
              </p>
              
              <h2>Information We Collect</h2>
              
              <h3>Information You Provide to Us</h3>
              <p>
                When you use our Service, we may collect information that you provide directly to us, such as:
              </p>
              <ul>
                <li>Contact information, such as your name and email address, when you contact us through our contact form</li>
                <li>Quilt measurements and binding preferences that you input into our calculator</li>
                <li>Any other information you choose to provide</li>
              </ul>
              
              <h3>Information We Collect Automatically</h3>
              <p>
                When you access or use our Service, we may automatically collect information about you, including:
              </p>
              <ul>
                <li>
                  <strong>Log Information:</strong> We collect log information about your use of the Service, including the type of browser you use, access times, pages viewed, and your IP address.
                </li>
                <li>
                  <strong>Device Information:</strong> We collect information about the device you use to access our Service, including the hardware model, operating system and version, and unique device identifiers.
                </li>
                <li>
                  <strong>Usage Information:</strong> We collect information about your use of the Service, such as the features you use and the actions you take.
                </li>
                <li>
                  <strong>Cookies and Similar Technologies:</strong> We use cookies and similar technologies to collect information about your interaction with our Service and to remember your preferences.
                </li>
              </ul>
              
              <h2>How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul>
                <li>Provide, maintain, and improve our Service</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Understand how users interact with our Service</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                <li>Protect the rights and property of Quilt Binding Calculator and others</li>
                <li>Comply with applicable laws, regulations, and legal processes</li>
              </ul>
              
              <h2>Sharing of Information</h2>
              <p>
                We may share the information we collect in the following circumstances:
              </p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> We may share your information with third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.
                </li>
                <li>
                  <strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.
                </li>
                <li>
                  <strong>With Your Consent:</strong> We may share your information with third parties when we have your consent to do so.
                </li>
              </ul>
              
              <h2>Data Security</h2>
              <p>
                We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.
              </p>
              
              <h2>Your Choices</h2>
              <p>
                <strong>Cookies:</strong> Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove or reject browser cookies. Please note that if you choose to remove or reject cookies, this could affect the availability and functionality of our Service.
              </p>
              
              <h2>Children's Privacy</h2>
              <p>
                Our Service is not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will promptly delete that information.
              </p>
              
              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. If we make material changes, we will notify you by updating the date at the top of the policy and, in some cases, we may provide you with additional notice.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p>
                <span className="text-[#FF5722]">
                  info at bindingcalculatorquilt.com
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
