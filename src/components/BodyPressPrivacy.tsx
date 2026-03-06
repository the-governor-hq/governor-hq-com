import { Link } from 'react-router-dom'

export default function BodyPressPrivacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back button */}
        <Link 
          to="/" 
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          ← Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            BodyPress Privacy Policy
          </h1>
          <p className="text-gray-400 text-lg">
            Last Updated: March 6, 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-cyan max-w-none space-y-8">
          
          {/* Introduction */}
          <section>
            <h2 className="text-3xl font-semibold mb-4 text-white">Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              BodyPress ("the App", "we", "us", or "our") is committed to protecting your privacy. 
              This Privacy Policy explains how BodyPress collects, uses, processes, and protects your 
              personal information when you use our mobile application.
            </p>
            <p className="text-gray-300 leading-relaxed">
              BodyPress is a health and wellness application that collects physiological, environmental, 
              and behavioral signals from your device sensors and synthesizes them into daily narrative 
              journal entries written from your body's perspective.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-3xl font-semibold mb-4 text-white">Information We Collect</h2>
            
            <h3 className="text-2xl font-semibold mb-3 text-cyan-400">1. Health and Fitness Data</h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              We collect the following health metrics from your device's health platform (HealthKit on iOS, 
              Health Connect on Android):
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Activity Metrics:</strong> Steps, distance traveled, calories burned, workouts</li>
              <li><strong>Cardiovascular Data:</strong> Heart rate (average, resting), Heart Rate Variability (HRV/SDNN)</li>
              <li><strong>Sleep Data:</strong> Sleep duration and sleep phases</li>
              <li><strong>Bluetooth Heart Rate Devices:</strong> Real-time heart rate data from connected BLE heart rate monitors (Polar, Wahoo, Garmin, etc.), including BPM readings and RR intervals for HRV analysis</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-3">
              <strong>Important:</strong> BodyPress only <em>reads</em> from your health data store. We never write data 
              back to HealthKit or Health Connect.
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-cyan-400 mt-6">2. Location Data</h3>
            <p className="text-gray-300 leading-relaxed">
              We collect your GPS coordinates <strong>temporarily and ephemerally</strong> for the sole purpose of 
              fetching environmental data (temperature, humidity, air quality index, UV index, atmospheric pressure, 
              wind conditions). Your precise location is:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Used only to query our environmental data API</li>
              <li><strong>Never stored</strong> on your device or our servers</li>
              <li><strong>Never transmitted</strong> to third parties</li>
              <li><strong>Discarded immediately</strong> after the environmental data is retrieved</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-3">
              We do <strong>not</strong> maintain any location history or track your movements.
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-cyan-400 mt-6">3. Calendar Data</h3>
            <p className="text-gray-300 leading-relaxed">
              With your permission, we read today's calendar events to provide contextual information about your 
              daily activities. Calendar data is processed locally on your device and included in AI-generated journal 
              entries.
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-cyan-400 mt-6">4. Environmental Data</h3>
            <p className="text-gray-300 leading-relaxed">
              Based on your temporary location, we collect environmental information including:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Temperature and humidity</li>
              <li>Air Quality Index (AQI)</li>
              <li>UV index</li>
              <li>Atmospheric pressure</li>
              <li>Wind speed and conditions</li>
              <li>General weather conditions</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 text-cyan-400 mt-6">5. User-Generated Content</h3>
            <p className="text-gray-300 leading-relaxed">
              You may optionally add:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Personal notes and annotations</li>
              <li>Mood indicators (emojis)</li>
              <li>Custom journal entries</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-3">
              This content is stored locally on your device in an encrypted SQLite database.
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-cyan-400 mt-6">6. Technical Data</h3>
            <p className="text-gray-300 leading-relaxed">
              We may collect technical information necessary for app functionality:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Device type and operating system version</li>
              <li>App version and build number</li>
              <li>Error logs and crash reports (if you opt in)</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-3xl font-semibold mb-4 text-white">How We Use Your Information</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              We use the collected information solely for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Generate AI Narratives:</strong> Your health, environmental, and calendar data is sent to our AI service to create personalized daily journal entries</li>
              <li><strong>Identify Patterns:</strong> Analyze trends in your data to provide insights about correlations and patterns</li>
              <li><strong>Display Data:</strong> Present your collected metrics in a readable, narrative format within the app</li>
              <li><strong>Background Sync:</strong> Collect data periodically in the background (when enabled) for continuous health tracking</li>
              <li><strong>Improve App Functionality:</strong> Use aggregated, anonymized data to improve the app experience</li>
            </ul>
          </section>

          {/* Data Storage and Security */}
          <section>
            <h2 className="text-3xl font-semibold mb-4 text-white">Data Storage and Security</h2>
            
            <h3 className="text-2xl font-semibold mb-3 text-cyan-400">Local Storage</h3>
            <p className="text-gray-300 leading-relaxed">
              The vast majority of your data is stored <strong>locally on your device</strong> using SQLite encryption. 
              This includes:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>All captured health snapshots</li>
              <li>Generated journal entries</li>
              <li>User annotations and notes</li>
              <li>BLE heart rate session recordings</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 text-cyan-400 mt-6">Data Transmission</h3>
            <p className="text-gray-300 leading-relaxed">
              When generating AI journal entries, your health and contextual data is transmitted securely via 
              HTTPS to our AI processing service. This data is:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Encrypted in transit using TLS/SSL</li>
              <li>Processed in real-time</li>
              <li><strong>Not permanently stored</strong> on our servers after processing</li>
              <li>Never shared with third parties for advertising or marketing purposes</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 text-cyan-400 mt-6">Security Measures</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Industry-standard encryption for data storage and transmission</li>
              <li>Secure API connections using HTTPS</li>
              <li>No telemetry or tracking without explicit consent</li>
              <li>Regular security updates and patches</li>
            </ul>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-3xl font-semibold mb-4 text-white">Third-Party Services</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              BodyPress integrates with the following third-party services:
            </p>
            
            <h3 className="text-2xl font-semibold mb-3 text-cyan-400">AI Language Model Service</h3>
            <p className="text-gray-300 leading-relaxed">
              We use AI language models to generate narrative journal entries from your health data. Your data is sent 
              to our AI service provider, processed, and the resulting narrative is returned to your device. The AI service 
              does not retain your data after processing.
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-cyan-400 mt-6">Environmental Data API</h3>
            <p className="text-gray-300 leading-relaxed">
              We use the Ambient Scan API to fetch environmental conditions based on your temporary GPS coordinates. 
              Only your coordinates are transmitted; no personal or health information is shared with this service.
            </p>
          </section>

          {/* Your Rights and Choices */}
          <section>
            <h2 className="text-3xl font-semibold mb-4 text-white">Your Rights and Choices</h2>
            
            <p className="text-gray-300 leading-relaxed mb-3">You have the following rights regarding your data:</p>
            
            <h3 className="text-2xl font-semibold mb-3 text-cyan-400">Permission Management</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>You can grant or revoke permissions for health data, location, calendar, and Bluetooth at any time through your device settings</li>
              <li>Each permission is optional; you can skip any permission request during onboarding</li>
              <li>The app will function with reduced features if certain permissions are denied</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 text-cyan-400 mt-6">Data Control</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Export Your Data:</strong> You can share and export your journal entries at any time</li>
              <li><strong>Delete Your Data:</strong> Uninstalling the app removes all locally stored data from your device</li>
              <li><strong>Background Processing:</strong> You can disable background data collection in the app settings</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 text-cyan-400 mt-6">Opt-Out Options</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>You can disable specific data sources (health, environment, location, calendar, BLE) on a per-capture basis</li>
              <li>You can disable crash reporting and analytics</li>
            </ul>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-3xl font-semibold mb-4 text-white">Data Retention</h2>
            <p className="text-gray-300 leading-relaxed">
              <strong>On Your Device:</strong> All data remains on your device indefinitely until you manually delete 
              entries or uninstall the app.
            </p>
            <p className="text-gray-300 leading-relaxed mt-3">
              <strong>On Our Servers:</strong> Data sent to our AI service for journal generation is processed in real-time 
              and not retained after the narrative is generated and returned to your device.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-3xl font-semibold mb-4 text-white">Children's Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              BodyPress is not intended for use by children under the age of 13. We do not knowingly collect personal 
              information from children under 13. If you believe we have inadvertently collected such information, 
              please contact us immediately.
            </p>
          </section>

          {/* International Users */}
          <section>
            <h2 className="text-3xl font-semibold mb-4 text-white">International Users</h2>
            <p className="text-gray-300 leading-relaxed">
              BodyPress is available globally. If you are accessing the app from outside your home country, please be 
              aware that your information may be transferred to, stored, and processed in countries where our servers 
              are located. By using the app, you consent to the transfer of your information to countries that may have 
              different data protection laws than your country of residence.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section>
            <h2 className="text-3xl font-semibold mb-4 text-white">Changes to This Privacy Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, 
              regulatory, or operational reasons. We will notify you of any material changes by:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Posting the updated policy in the app</li>
              <li>Updating the "Last Updated" date at the top of this policy</li>
              <li>Sending an in-app notification for significant changes</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-3">
              Your continued use of BodyPress after changes are posted constitutes your acceptance of the updated policy.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-3xl font-semibold mb-4 text-white">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              If you have questions, concerns, or requests regarding this Privacy Policy or how we handle your data, 
              please contact us:
            </p>
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mt-4">
              <p className="text-gray-300">
                <strong className="text-white">The Governor HQ</strong><br />
                Email: <a href="mailto:privacy@governor-hq.com" className="text-cyan-400 hover:text-cyan-300">privacy@thegovernor.xyz</a><br />
                GitHub: <a href="https://github.com/the-governor-hq/bodypress-flutter" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">github.com/the-governor-hq/bodypress</a>
              </p>
            </div>
          </section>

          {/* Open Source Notice */}
          <section className="mt-12 pt-8 border-t border-gray-800">
            <h2 className="text-3xl font-semibold mb-4 text-white">Open Source Transparency</h2>
            <p className="text-gray-300 leading-relaxed">
              BodyPress is an <strong>open-source project</strong>. You can review our complete source code, including 
              how we handle your data, on GitHub. We believe in transparency and invite technical review from the community.
            </p>
            <p className="text-gray-300 leading-relaxed mt-3">
              <a 
                href="https://github.com/the-governor-hq/bodypress-flutter" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
              >
                View Source Code on GitHub →
              </a>
            </p>
          </section>

        </div>

        {/* Back to top */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
