'use client'

import { AlertTriangle, Stethoscope, Shield, Brain } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* About Hero Section */}
      <div className="bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] text-white py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">About MedReport AI</h1>
          <p className="text-xl opacity-90">Advanced Medical Report Analysis Platform</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Medical Disclaimer Alert */}
        <Alert variant="destructive" className="mb-8">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Important Medical Disclaimer</AlertTitle>
          <AlertDescription>
            MedReport AI is an AI-powered analysis tool and should NOT be used as a substitute for professional medical advice, 
            diagnosis, or treatment. Always consult with your healthcare provider regarding medical conditions.
          </AlertDescription>
        </Alert>

        {/* About Sections */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* What is MedReport AI */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Stethoscope className="h-6 w-6" />
              What is MedReport AI?
            </h2>
            <p className="text-muted-foreground mb-4">
              MedReport AI is a sophisticated artificial intelligence platform designed to analyze and interpret medical 
              reports and laboratory results. Our system employs advanced natural language processing to break down 
              complex medical terminology into clear, comprehensible explanations.
            </p>
          </section>

          {/* How It Works */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Brain className="h-6 w-6" />
              How It Works
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-sky-500 pl-4">
                <h3 className="font-semibold mb-2">1. Upload Your Report</h3>
                <p className="text-muted-foreground">
                  Simply input your medical report text into our secure system.
                </p>
              </div>
              <div className="border-l-4 border-sky-500 pl-4">
                <h3 className="font-semibold mb-2">2. AI Analysis</h3>
                <p className="text-muted-foreground">
                  Our AI processes the report, identifying key medical terms and findings.
                </p>
              </div>
              <div className="border-l-4 border-sky-500 pl-4">
                <h3 className="font-semibold mb-2">3. Get Insights</h3>
                <p className="text-muted-foreground">
                  Receive simplified explanations and general information about your results.
                </p>
              </div>
            </div>
          </section>

          {/* Safety & Privacy */}
          <section className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Shield className="h-6 w-6" />
              Safety & Privacy
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Data Security</h3>
                <p className="text-muted-foreground">
                  We prioritize the security of your medical information. All data is processed with strict 
                  privacy measures and is not stored after analysis.
                </p>
              </div>
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Ethical AI Use</h3>
                <p className="text-muted-foreground">
                  Our AI is designed to provide information while maintaining medical ethics and emphasizing 
                  the importance of professional medical consultation.
                </p>
              </div>
            </div>
          </section>

          {/* Important Guidelines */}
          <section className="md:col-span-2 bg-yellow-50 dark:bg-yellow-950/20 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Important Guidelines</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Always consult with healthcare professionals for medical decisions</li>
              <li>Use MedReport AI as a supplementary tool, not a primary source of medical advice</li>
              <li>In case of emergency, contact emergency services immediately</li>
              <li>Share all AI insights with your healthcare provider for validation</li>
              <li>Keep your medical records and consult your doctor regularly</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  )
} 