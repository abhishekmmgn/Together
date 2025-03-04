import { type NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/users";
import { getDataFromToken } from "@/lib/getDataFromToken";
import { cookies } from "next/headers";
import Posts from "@/models/posts";

export async function GET(request: NextRequest) {
	try {
		await connectDB();

		const curUserId = await getDataFromToken(request);
		const user = await User.findOne({ _id: curUserId }).select(
			"name profilePhoto bio",
		);
		const data = {
			_id: user._id,
			name: user.name,
			profilePhoto: user.profilePhoto,
			bio: user.bio,
		};

		return NextResponse.json({
			message: "Data found",
			data,
		});
	} catch (error: any) {
		console.log(error);
		return NextResponse.json({ error: error.message }, { status: 400 });
	}
}
export async function PUT(request: NextRequest) {
	try {
		await connectDB();

		const userId = await getDataFromToken(request);
		const { profilePhoto, bio } = await request.json();

		const _id = userId;
		const user = await User.findOne({ _id });

		if (!user) {
			return NextResponse.json(
				{ error: "User doesn't exist." },
				{ status: 400 },
			);
		}

		const result = await User.updateOne(
			{ _id },
			{ $set: { profilePhoto, bio } },
		);
		if (result.modifiedCount > 0) {
			console.log("Document updated successfully.");
			return NextResponse.json({
				message: "Profile updated successfully.",
				success: true,
			});
		} else {
			console.log("No document was updated.");
			return NextResponse.json({
				message: "Something went wrong.",
				success: false,
			});
		}
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}

export async function DELETE(request: NextRequest) {
	try {
		await connectDB();

		const _id = await getDataFromToken(request);

		const user = await User.findOne({ _id });

		if (!user) {
			return NextResponse.json({ error: "Invalid id" }, { status: 400 });
		}

		// delete all posts by the user
		await Posts.deleteMany({ _id: { $in: user.posts } });

		// delete user
		await User.deleteOne({ _id });

		// remove token
		cookies().set("token", "", { httpOnly: true, expires: new Date(0) });

		return NextResponse.json({
			message: "User deleted successfully",
			success: true,
		});
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
