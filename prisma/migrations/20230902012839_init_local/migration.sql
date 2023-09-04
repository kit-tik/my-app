-- CreateTable
CREATE TABLE "whitelistUser" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "whitelistUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "ColdRoom" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "RID" TEXT NOT NULL,
    "roomType" TEXT NOT NULL,
    "coldRoomAddress" TEXT,
    "tambon" TEXT,
    "amper" TEXT,
    "province" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "productType" TEXT,
    "roomWidth" DECIMAL(65,30) NOT NULL,
    "roomLength" DECIMAL(65,30) NOT NULL,
    "roomHeight" DECIMAL(65,30) NOT NULL,
    "maxTemp" DECIMAL(65,30),
    "minTemp" DECIMAL(65,30),
    "constructionType" TEXT NOT NULL,
    "year" INTEGER,
    "panelClass" TEXT NOT NULL DEFAULT 'EPS',
    "foamMass" DECIMAL(65,30) NOT NULL,
    "bizID" TEXT NOT NULL,
    "userEmail" TEXT,

    CONSTRAINT "ColdRoom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HBCDCompany" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "bizType" TEXT,
    "bizID" TEXT NOT NULL,
    "licenseNo" TEXT,
    "officeAddress" TEXT NOT NULL,
    "officeTelNo" TEXT,
    "province" TEXT NOT NULL,
    "userEmail" TEXT,

    CONSTRAINT "HBCDCompany_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "whitelistUser_email_key" ON "whitelistUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "ColdRoom_RID_key" ON "ColdRoom"("RID");

-- CreateIndex
CREATE UNIQUE INDEX "HBCDCompany_bizID_key" ON "HBCDCompany"("bizID");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ColdRoom" ADD CONSTRAINT "ColdRoom_bizID_fkey" FOREIGN KEY ("bizID") REFERENCES "HBCDCompany"("bizID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ColdRoom" ADD CONSTRAINT "ColdRoom_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HBCDCompany" ADD CONSTRAINT "HBCDCompany_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE SET NULL ON UPDATE CASCADE;
