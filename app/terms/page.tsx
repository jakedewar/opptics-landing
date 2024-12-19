import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions for using Opptics Chrome Extension',
};

export default function Terms() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg mb-8">Last updated: December 19, 2024</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p>By installing and using the Opptics Chrome Extension ("the Extension"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Extension.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
          <p>Opptics is a Chrome Extension that enables users to create and apply text replacements across web pages for product demonstrations and testing purposes. The Extension automatically replaces specified text patterns while browsing, making it ideal for creating customized demo environments without modifying the actual website.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Use License</h2>
          <p>Permission is granted to use the Extension for personal or commercial use subject to the following conditions:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>You may not modify, decompile, or reverse engineer the Extension</li>
            <li>You may not use the Extension for any illegal purposes</li>
            <li>You may not distribute or sell the Extension</li>
            <li>You may not remove any copyright or proprietary notices from the Extension</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Disclaimer of Warranties</h2>
          <p>The Extension is provided "as is" without warranties of any kind, either express or implied. We do not warrant that the Extension will be error-free or uninterrupted.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
          <p>Under no circumstances shall Opptics be liable for any direct, indirect, incidental, special, consequential, or exemplary damages arising from your use of the Extension.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Continued use of the Extension after any such changes constitutes your acceptance of the new terms.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
          <p>For questions about these terms, please contact:</p>
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