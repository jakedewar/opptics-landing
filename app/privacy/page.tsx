import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy and data handling practices for Opptics Chrome Extension',
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg mb-8">Last updated: December 19, 2024</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Overview</h2>
          <p>Opptics enables users to create and apply text replacements across web pages for product demonstrations and testing purposes. The extension automatically replaces specified text patterns while browsing, making it ideal for creating customized demo environments without modifying the actual website.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Information Collection</h2>
          <p>Opptics does not collect any personal information. All text replacements and settings are stored locally in your browser using Chrome's storage API. No data is transmitted to external servers.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Data Storage</h2>
          <p>We store locally:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Your text replacement mappings</li>
            <li>Template preferences</li>
            <li>Extension settings</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Required Permissions</h2>
          <p>Our extension requires certain permissions to function. Here's why each permission is necessary:</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Storage Permission</h3>
          <p>Used to save user preferences, text replacement mappings, and templates locally in the browser. This ensures persistence of user settings and templates across browser sessions.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Active Tab Permission</h3>
          <p>Required to modify text content on the current webpage when the user activates a text replacement. This permission ensures changes only occur on the active tab when explicitly triggered by the user.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Context Menus Permission</h3>
          <p>Used to provide right-click functionality that allows users to quickly add new text replacements when selecting text on a webpage.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Scripting Permission</h3>
          <p>Required to inject content scripts that perform text replacements on web pages. This permission is essential for the core functionality of modifying page content with user-defined replacements.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Tabs Permission</h3>
          <p>Required to detect tab updates and reload text replacements when navigating between pages. This ensures replacements persist during normal browsing activities.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Host Permissions</h3>
          <p>Required to perform text replacements across different websites. Users need to demo their products across various domains, making this permission essential for the core functionality.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
          <p>We implement security measures to protect your data:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>All data is stored locally in your browser</li>
            <li>No external servers or APIs are used</li>
            <li>No personal information is collected or transmitted</li>
            <li>No remote code execution</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Compliance Statement</h2>
          <p>We certify that Opptics:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Does not collect or transmit any personal information</li>
            <li>Stores all data locally in the browser</li>
            <li>Does not use external servers or APIs</li>
            <li>Does not execute remote code</li>
            <li>Complies with all Chrome Web Store Developer Program Policies</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Changes to Privacy Policy</h2>
          <p>We reserve the right to update our Privacy Policy. Any changes will be reflected in the "Last updated" date at the top of this document.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
          <p>For questions about the Extension's privacy practices, please contact:</p>
          <p className="mt-2">
            <a href="mailto:jakedewar27@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">
              jakedewar27@gmail.com
            </a>
          </p>
        </section>

        <div className="mt-12 pt-8 border-t">
          <Link 
            href="/" 
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
} 