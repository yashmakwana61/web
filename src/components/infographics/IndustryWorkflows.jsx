'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, FileSignature, GraduationCap, Building2, Stethoscope, Pill, Microscope, Activity, Package, Cog, BoxSelect, Truck } from 'lucide-react';

const FlowItem = ({ icon: Icon, title, desc, delay, colorClass }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex flex-col items-center text-center max-w-[200px] group"
  >
    <div className={`w-16 h-16 rounded-2xl ${colorClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h4 className="font-semibold text-foreground mb-2">{title}</h4>
    <p className="text-sm text-muted-foreground">{desc}</p>
  </motion.div>
);

const Connector = ({ delay }) => (
  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="hidden lg:block w-16 xl:w-24 h-0.5 bg-border origin-left relative top-8"
  >
    <div className="absolute right-0 -top-1.5 w-3 h-3 border-t-2 border-r-2 border-border transform rotate-45" />
  </motion.div>
);

export function EducationWorkflow() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-0 py-12 overflow-x-auto">
      <FlowItem icon={UserPlus} title="Inquiry & Lead" desc="Automated lead capture and nurturing" delay={0.1} colorClass="bg-[hsl(var(--chart-1))]" />
      <Connector delay={0.3} />
      <FlowItem icon={FileSignature} title="Admissions" desc="Digital forms & document verification" delay={0.4} colorClass="bg-[hsl(var(--chart-2))]" />
      <Connector delay={0.6} />
      <FlowItem icon={Building2} title="Enrollment" desc="Automated fee processing & timetables" delay={0.7} colorClass="bg-[hsl(var(--chart-3))]" />
      <Connector delay={0.9} />
      <FlowItem icon={GraduationCap} title="Graduation" desc="Alumni records & success tracking" delay={1.0} colorClass="bg-[hsl(var(--success-chart))]" />
    </div>
  );
}

export function HealthcareWorkflow() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-0 py-12">
      <FlowItem icon={Activity} title="Registration" desc="Self-service kiosks & insurance check" delay={0.1} colorClass="bg-[hsl(var(--chart-4))]" />
      <Connector delay={0.3} />
      <FlowItem icon={Stethoscope} title="Diagnosis" desc="EHR integration & lab ordering" delay={0.4} colorClass="bg-[hsl(var(--chart-1))]" />
      <Connector delay={0.6} />
      <FlowItem icon={Pill} title="Treatment" desc="E-prescriptions & care pathways" delay={0.7} colorClass="bg-[hsl(var(--chart-2))]" />
      <Connector delay={0.9} />
      <FlowItem icon={Microscope} title="Follow-up" desc="Automated billing & patient surveys" delay={1.0} colorClass="bg-[hsl(var(--chart-3))]" />
    </div>
  );
}

export function ManufacturingWorkflow() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-0 py-12">
      <FlowItem icon={BoxSelect} title="Raw Materials" desc="Automated procurement & receiving" delay={0.1} colorClass="bg-[hsl(var(--warning-chart))]" />
      <Connector delay={0.3} />
      <FlowItem icon={Cog} title="Production" desc="Work order tracking & routing" delay={0.4} colorClass="bg-[hsl(var(--chart-2))]" />
      <Connector delay={0.6} />
      <FlowItem icon={Package} title="Quality Control" desc="Digital QA checks & compliance" delay={0.7} colorClass="bg-[hsl(var(--chart-5))]" />
      <Connector delay={0.9} />
      <FlowItem icon={Truck} title="Delivery" desc="Logistics tracking & invoicing" delay={1.0} colorClass="bg-[hsl(var(--success-chart))]" />
    </div>
  );
}