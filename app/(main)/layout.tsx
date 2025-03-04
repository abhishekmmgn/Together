import { Sidebar } from "@/components/sidebar";
import Navbar from "@/components/navbar";
import { Toaster } from "react-hot-toast";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import { extractRouterConfig } from "uploadthing/server";

export default function LayoutOne({ children }: { children: React.ReactNode }) {
	return (
		<section>
			<Toaster />
			<Navbar />
			<Sidebar />
			<div className="flex items-center justify-center">
				<div className="w-full h-[calc(100vh-56px)] mt-[92px] sm:mt-14 sm:ml-[210px] md:ml-[232px] xl:ml-0 max-w-2xl">
					{children}
				</div>
			</div>
			<NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
		</section>
	);
}
