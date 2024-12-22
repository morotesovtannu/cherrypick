import { } from 'typeorm';
import { db } from '@/db/postgre.js';

import { AbuseReportResolver } from './entities/abuse-report-resolver.js';
import { Announcement } from './entities/announcement.js';
import { AnnouncementRead } from './entities/announcement-read.js';
import { Instance } from './entities/instance.js';
import { Poll } from './entities/poll.js';
import { PollVote } from './entities/poll-vote.js';
import { Meta } from './entities/meta.js';
import { SwSubscription } from './entities/sw-subscription.js';
import { NoteWatching } from './entities/note-watching.js';
import { NoteThreadMuting } from './entities/note-thread-muting.js';
import { NoteUnread } from './entities/note-unread.js';
import { RegistrationTicket } from './entities/registration-tickets.js';
import { UserRepository } from './repositories/user.js';
import { NoteRepository } from './repositories/note.js';
import { DriveFileRepository } from './repositories/drive-file.js';
import { DriveFolderRepository } from './repositories/drive-folder.js';
import { AccessToken } from './entities/access-token.js';
import { UserNotePining } from './entities/user-note-pining.js';
import { SigninRepository } from './repositories/signin.js';
import { MessagingMessageRepository } from './repositories/messaging-message.js';
import { UserListRepository } from './repositories/user-list.js';
import { UserListJoining } from './entities/user-list-joining.js';
import { UserGroupRepository } from './repositories/user-group.js';
import { UserGroupJoining } from './entities/user-group-joining.js';
import { UserGroupInvitationRepository } from './repositories/user-group-invitation.js';
import { FollowRequestRepository } from './repositories/follow-request.js';
import { MutingRepository } from './repositories/muting.js';
import { BlockingRepository } from './repositories/blocking.js';
import { NoteReactionRepository } from './repositories/note-reaction.js';
import { NotificationRepository } from './repositories/notification.js';
import { NoteFavoriteRepository } from './repositories/note-favorite.js';
import { UserPublickey } from './entities/user-publickey.js';
import { UserKeypair } from './entities/user-keypair.js';
import { AppRepository } from './repositories/app.js';
import { FollowingRepository } from './repositories/following.js';
import { AbuseUserReportRepository } from './repositories/abuse-user-report.js';
import { AuthSessionRepository } from './repositories/auth-session.js';
import { UserProfile } from './entities/user-profile.js';
import { AttestationChallenge } from './entities/attestation-challenge.js';
import { UserSecurityKey } from './entities/user-security-key.js';
import { HashtagRepository } from './repositories/hashtag.js';
import { PageRepository } from './repositories/page.js';
import { PageLikeRepository } from './repositories/page-like.js';
import { GalleryPostRepository } from './repositories/gallery-post.js';
import { GalleryLikeRepository } from './repositories/gallery-like.js';
import { ModerationLogRepository } from './repositories/moderation-logs.js';
import { UsedUsername } from './entities/used-username.js';
import { ClipRepository } from './repositories/clip.js';
import { ClipNote } from './entities/clip-note.js';
import { AntennaRepository } from './repositories/antenna.js';
import { AntennaNote } from './entities/antenna-note.js';
import { PromoNote } from './entities/promo-note.js';
import { PromoRead } from './entities/promo-read.js';
import { EmojiRepository } from './repositories/emoji.js';
import { RelayRepository } from './repositories/relay.js';
import { ChannelRepository } from './repositories/channel.js';
import { MutedNote } from './entities/muted-note.js';
import { ChannelFollowing } from './entities/channel-following.js';
import { ChannelNotePining } from './entities/channel-note-pining.js';
import { RegistryItem } from './entities/registry-item.js';
import { Ad } from './entities/ad.js';
import { PasswordResetRequest } from './entities/password-reset-request.js';
import { UserPending } from './entities/user-pending.js';
import { InstanceRepository } from './repositories/instance.js';
import { Webhook } from './entities/webhook.js';
import { UserIp } from './entities/user-ip.js';

export const AbuseReportResolvers = db.getRepository(AbuseReportResolver);
export const Announcements = db.getRepository(Announcement);
export const AnnouncementReads = db.getRepository(AnnouncementRead);
export const Apps = (AppRepository);
export const Notes = (NoteRepository);
export const NoteFavorites = (NoteFavoriteRepository);
export const NoteWatchings = db.getRepository(NoteWatching);
export const NoteThreadMutings = db.getRepository(NoteThreadMuting);
export const NoteReactions = (NoteReactionRepository);
export const NoteUnreads = db.getRepository(NoteUnread);
export const Polls = db.getRepository(Poll);
export const PollVotes = db.getRepository(PollVote);
export const Users = (UserRepository);
export const UserProfiles = db.getRepository(UserProfile);
export const UserKeypairs = db.getRepository(UserKeypair);
export const UserPendings = db.getRepository(UserPending);
export const AttestationChallenges = db.getRepository(AttestationChallenge);
export const UserSecurityKeys = db.getRepository(UserSecurityKey);
export const UserPublickeys = db.getRepository(UserPublickey);
export const UserLists = (UserListRepository);
export const UserListJoinings = db.getRepository(UserListJoining);
export const UserGroups = (UserGroupRepository);
export const UserGroupJoinings = db.getRepository(UserGroupJoining);
export const UserGroupInvitations = (UserGroupInvitationRepository);
export const UserNotePinings = db.getRepository(UserNotePining);
export const UserIps = db.getRepository(UserIp);
export const UsedUsernames = db.getRepository(UsedUsername);
export const Followings = (FollowingRepository);
export const FollowRequests = (FollowRequestRepository);
export const Instances = (InstanceRepository);
export const Emojis = (EmojiRepository);
export const DriveFiles = (DriveFileRepository);
export const DriveFolders = (DriveFolderRepository);
export const Notifications = (NotificationRepository);
export const Metas = db.getRepository(Meta);
export const Mutings = (MutingRepository);
export const Blockings = (BlockingRepository);
export const SwSubscriptions = db.getRepository(SwSubscription);
export const Hashtags = (HashtagRepository);
export const AbuseUserReports = (AbuseUserReportRepository);
export const RegistrationTickets = db.getRepository(RegistrationTicket);
export const AuthSessions = (AuthSessionRepository);
export const AccessTokens = db.getRepository(AccessToken);
export const Signins = (SigninRepository);
export const MessagingMessages = (MessagingMessageRepository);
export const Pages = (PageRepository);
export const PageLikes = (PageLikeRepository);
export const GalleryPosts = (GalleryPostRepository);
export const GalleryLikes = (GalleryLikeRepository);
export const ModerationLogs = (ModerationLogRepository);
export const Clips = (ClipRepository);
export const ClipNotes = db.getRepository(ClipNote);
export const Antennas = (AntennaRepository);
export const AntennaNotes = db.getRepository(AntennaNote);
export const PromoNotes = db.getRepository(PromoNote);
export const PromoReads = db.getRepository(PromoRead);
export const Relays = (RelayRepository);
export const MutedNotes = db.getRepository(MutedNote);
export const Channels = (ChannelRepository);
export const ChannelFollowings = db.getRepository(ChannelFollowing);
export const ChannelNotePinings = db.getRepository(ChannelNotePining);
export const RegistryItems = db.getRepository(RegistryItem);
export const Webhooks = db.getRepository(Webhook);
export const Ads = db.getRepository(Ad);
export const PasswordResetRequests = db.getRepository(PasswordResetRequest);
