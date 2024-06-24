import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-neutral-900 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-lime-400 mb-2 ">
            Berke || Business and IT: A Historical Perspective
          </h1>
          <p className="text-xl text-gray-200">
            Exploring the evolution and impact of information technology on
            business
          </p>
        </header>

        <div className="space-y-4 ">
          <a
            href="/bsbi"
            className="text-center items-center mb-4 text-white flex justify-center font-bold hover:text-lime-500 mx-auto">
            If you are interested to make impact, click me!
          </a>
          {/* Section 1: History of Networks and Internet */}
          <section className="bg-white p-6 rounded-lg shadow-md  hover:shadow-lime-200 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
              The Birth of the Internet
            </h2>
            <p className="mb-4">
              The internet, as we know it today, has roots stretching back to
              the early 1960s. It emerged from the need for robust,
              fault-tolerant communication networks during the Cold War era. The
              journey from those early days to the modern internet is a
              fascinating tale of innovation, collaboration, and technological
              breakthroughs.
            </p>
            <p className="mb-4">
              In 1969, the first node of ARPANET was installed at UCLA. This
              network, developed by the US Department of Defense, laid the
              groundwork for what would become the internet. It introduced the
              concept of packet switching, allowing data to be split into
              smaller chunks and reassembled at the destination, a fundamental
              principle of modern internet communication.
            </p>
            <p className="mb-4">
              A pivotal moment came in 1973 when Vint Cerf and Bob Kahn
              developed the TCP/IP protocol suite. This innovation allowed
              diverse computer networks to interconnect and communicate, forming
              the backbone of the internet. Their work standardized how data
              should be packetized, addressed, transmitted, routed, and
              received, enabling the creation of a truly global network.
            </p>
            <p className="mb-4">
              The next major leap forward occurred in 1989 when Tim Berners-Lee,
              working at CERN, invented the World Wide Web. Berners-Lees
              creation of HTML, HTTP, and URLs made the internet accessible to a
              broader audience, transforming it from a tool primarily used by
              academics and the military into a platform for global information
              sharing and commerce.
            </p>
            <p>
              By 1991, the World Wide Web was made publicly available, marking
              the beginning of the internet as we know it today. This
              development democratized information access and laid the
              foundation for the digital revolution that would reshape virtually
              every aspect of society and business in the coming decades.
            </p>

            <p>
              Initially designed for military and academic purposes, the
              internet has since revolutionized communication, commerce, and
              information sharing on a global scale.
            </p>
          </section>

          {/* Section 2: IT's Impact on Business Sectors */}
          <section className="bg-white p-6 rounded-lg shadow-md hover:shadow-lime-200 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
              IT Transformation of Business
            </h2>
            <p className="mb-4">
              The advent of Information Technology (IT) has revolutionized the
              business landscape, transforming operations across various sectors
              and redefining the way companies interact with customers, manage
              resources, and make decisions. This digital transformation has led
              to unprecedented levels of efficiency, productivity, and
              innovation.
            </p>
            <p className="mb-4">
              In the realm of inventory management, IT has introduced real-time
              tracking systems that have dramatically reduced instances of
              stockouts and overstocking. These systems provide businesses with
              accurate, up-to-the-minute data on stock levels, enabling them to
              optimize their inventory, reduce carrying costs, and improve cash
              flow. The result is a more agile supply chain that can quickly
              adapt to changing market demands.
            </p>
            <p className="mb-4">
              The impact of IT on supply chain management extends beyond
              inventory control. It has facilitated seamless communication
              between suppliers, manufacturers, distributors, and retailers. EDI
              (Electronic Data Interchange) systems and cloud-based platforms
              have created transparent, efficient supply networks where
              information flows freely, reducing delays and minimizing errors.
              This interconnectedness has allowed for the development of
              just-in-time manufacturing and delivery systems, further
              optimizing operations.
            </p>
            <p className="mb-4">
              Customer Relationship Management (CRM) has been another area
              significantly enhanced by IT. Advanced CRM systems leverage big
              data analytics to provide businesses with deep insights into
              customer behavior, preferences, and needs. This wealth of
              information allows companies to personalize their offerings,
              improve customer service, and develop more effective marketing
              strategies. The result is stronger customer loyalty and increased
              lifetime value.
            </p>
            <p className="mb-4">
              The rise of e-commerce, powered by IT, has revolutionized both
              retail and B2B transactions. Online platforms have removed
              geographical barriers, allowing businesses to reach global markets
              with ease. They have also changed consumer behavior, with the
              convenience of online shopping leading to new expectations for
              product availability, delivery speed, and customer service. For
              B2B transactions, e-commerce platforms have streamlined
              procurement processes, reduced transaction costs, and improved
              transparency.
            </p>
            <p>
              In the realm of product development, IT has accelerated innovation
              through collaborative tools and advanced simulations.
              Computer-aided design (CAD) software, virtual prototyping, and 3D
              printing have shortened product development cycles and reduced
              costs. Cloud-based collaboration tools have made it possible for
              global teams to work together seamlessly, fostering creativity and
              enabling rapid iteration. These technological advancements have
              not only improved existing products but have also facilitated the
              creation of entirely new categories of goods and services.
            </p>

            <p>
              These advancements have led to increased efficiency, reduced
              costs, and improved decision-making across industries.
            </p>
          </section>

          {/* Section 3: Evaluating Network Performance */}
          <section className="bg-white p-6 rounded-lg shadow-md hover:shadow-lime-200 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
              Evaluating Network Performance
            </h2>
            <p className="mb-4">
              In the digital age, network performance is critical to business
              success. As companies increasingly rely on cloud services, remote
              work, and data-driven decision making, the need for robust,
              efficient networks has never been greater. Evaluating network
              performance is a complex task that involves monitoring and
              analyzing various metrics to ensure optimal functionality and
              identify areas for improvement.
            </p>
            <p className="mb-4">
              One of the primary metrics in network performance evaluation is
              uptime. This measure of network availability and reliability is
              often expressed as a percentage, with many businesses aiming for
              the highest (99.999%) of availability. Uptime is crucial because
              even short periods of network downtime can result in significant
              financial losses and damage to a companies reputation. Regular
              monitoring of uptime helps identify potential issues before they
              escalate into major problems.
            </p>
            <p className="mb-4">
              Latency is another critical metric in assessing network
              performance. It measures the delay in data transmission, typically
              in milliseconds. Low latency is essential for applications that
              require real-time interactions, such as video conferencing, online
              gaming, and financial trading platforms. High latency can lead to
              poor user experiences and can negatively impact business
              operations. Monitoring latency helps businesses identify
              bottlenecks in their network and optimize data routes.
            </p>
            <p className="mb-4">
              Throughput, which evaluates the amount of data transferred in a
              given time period, is a key indicator of network capacity. It is
              often measured in bits per second (bps) and is critical for
              applications that involve large data transfers, such as video
              streaming or big data analytics. Monitoring throughput helps
              businesses ensure their network can handle peak loads and informs
              decisions about network upgrades or expansions.
            </p>
            <p className="mb-4">
              Error rates are another important aspect of network performance
              evaluation. This metric monitors data integrity and transmission
              quality, measuring the frequency of errors in data packets. High
              error rates can lead to data corruption, necessitating
              retransmission and resulting in slower overall network
              performance. By monitoring error rates, businesses can identify
              issues with network hardware or configuration and take corrective
              action.
            </p>
            <p className="mb-4">
              A real-world example of the impact of effective network
              performance evaluation can be seen in a case study of a
              manufacturing company that implemented an IT system to track
              inventory levels in real-time. By closely monitoring network
              performance metrics, the company was able to optimize its system,
              resulting in a 30% reduction in stockouts and a 25% decrease in
              overstocking. The improved network performance also led to a 15%
              improvement in overall supply chain efficiency and a 20% increase
              in customer satisfaction due to improved product availability.
            </p>
            <p>
              Regular performance evaluations are essential to ensure that IT
              systems continue to meet evolving business needs and drive growth.
              As technologies advance and business requirements change, ongoing
              monitoring and optimization of network performance will remain a
              critical factor in maintaining competitive advantage in the
              digital marketplace.
            </p>

            <p>
              Regular performance evaluations ensure that IT systems continue to
              meet business needs and drive growth.
            </p>
          </section>
        </div>

        <footer className="text-center mt-12 text-gray-400">
          <p>
            Learn more about with{" "}
            <a href="/bsbi" className="text-lime-200 hover:underline">
              this interactive quiz
            </a>
            !
          </p>
        </footer>
      </div>
    </div>
  );
}
