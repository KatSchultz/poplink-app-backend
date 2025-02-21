import { Request, Response } from "express";
import { profileService } from "../services/profile.service";

export async function getProfiles(req: Request, res: Response) {
  try {
    const profiles = await profileService.getProfiles();
    return res.status(200).json(profiles);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function getUserProfiles(req: Request, res: Response) {
  try {
    const profiles = await profileService.getUserProfiles(
      req.query.userId as string
    );
    if (!profiles) return res.status(404).json("User not found");

    return res.status(200).json(profiles);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function getProfile(req: Request, res: Response) {
  try {
    const profile = await profileService.getProfile(req.params.id);
    if (!profile) return res.status(404).json("User not found");
    return res.status;
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function getProfileByUsername(req: Request, res: Response) {
  try {
    const profile = await profileService.getProfileByUsername(
      req.query.profileUsername as string
    );
    if (!profile) return res.status(404).json("User not found");
    return res.status(200).json(profile);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function addProfile(req: Request, res: Response) {
  try {
    const newProfile = await profileService.addProfile(req.body);
    return res.status(201).json(newProfile);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function updateProfile(req: Request, res: Response) {
  try {
    const updatedProfile = await profileService.updateProfile(
      req.params.id,
      req.body
    );
    return res.status(200).json(updatedProfile);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function deleteProfile(req: Request, res: Response) {
  try {
    await profileService.deleteProfile(req.params.id);
    return res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}
