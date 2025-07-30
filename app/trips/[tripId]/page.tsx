import { auth } from "@/auth";
import TripDetailClient from "@/components/TripDetailClient";
import { prisma } from "@/lib/prisma";
import React from "react";

const page = async ({ params }: { params: Promise<{ tripId: string }> }) => {
  const { tripId } = await params;
  const session = await auth();
  if (!session) {
    return <div>Please Log in</div>;
  }

  const trip = await prisma.trip.findFirst({
    where: { id: tripId },
  });

  if (!trip) {
    return <div>Trip Not Found...</div>;
  }

  return <TripDetailClient trip={trip} />;
};

export default page;
